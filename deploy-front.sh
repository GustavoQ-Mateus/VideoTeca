#!/bin/bash
set -e

# Kill docker e qualquer node em execução
sudo docker kill $(sudo docker ps -q) 2>/dev/null || true
sudo docker system prune -af 2>/dev/null || true
sudo killall node 2>/dev/null || true

# Swap 512MB (se não existir)
if [ ! -f /swapfile ]; then
  sudo fallocate -l 512M /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
fi

# Node.js 22 via nodesource (se não instalado)
if ! command -v node &>/dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# PM2 global
if ! command -v pm2 &>/dev/null; then
  sudo npm install -g pm2
fi

# Nginx (se não instalado)
if ! command -v nginx &>/dev/null; then
  sudo apt-get install -y nginx
fi

# Clonar ou atualizar repo
if [ -d /opt/videoteca ]; then
  cd /opt/videoteca
  sudo git fetch origin main
  sudo git reset --hard origin/main
else
  sudo git clone https://github.com/GustavoQ-Mateus/VideoTeca.git /opt/videoteca
  cd /opt/videoteca
fi

cd /opt/videoteca/videoteca-front

# Variável de ambiente para a API
echo "NEXT_PUBLIC_API_URL=http://3.80.249.204" | sudo tee .env.local

# Instalar dependências e buildar
sudo npm ci --prefer-offline 2>/dev/null || sudo npm ci
sudo NEXT_TELEMETRY_DISABLED=1 npm run build

# Configurar variáveis de runtime e iniciar com PM2
sudo pm2 delete videoteca-front 2>/dev/null || true
sudo pm2 start .next/standalone/server.js \
  --name videoteca-front \
  --env production \
  -- --port 3000

sudo pm2 save
sudo pm2 startup systemd -u root --hp /root 2>/dev/null || true

# Nginx config
sudo tee /etc/nginx/sites-available/videoteca <<'NGINX'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

sudo ln -sf /etc/nginx/sites-available/videoteca /etc/nginx/sites-enabled/videoteca
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

echo "=== DEPLOY CONCLUIDO ==="
sudo pm2 status
