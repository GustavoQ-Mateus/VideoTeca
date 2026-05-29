#!/bin/bash
# EC2 #1 — Frontend (Ubuntu 24.04 LTS)
# Executar como root: bash ec2-setup-frontend.sh

set -e

apt-get update -y
apt-get install -y docker.io docker-compose-v2 git

systemctl enable docker
systemctl start docker

git clone https://github.com/SEU_USUARIO/VideoTeca.git /opt/videoteca
cd /opt/videoteca/videoteca-front

cp .env.example .env
echo ""
echo "========================================"
echo "  Edite /opt/videoteca/videoteca-front/.env"
echo "  com NEXT_PUBLIC_API_URL=http://IP_EC2_BACKEND"
echo "========================================"
echo "  Depois execute:"
echo "  cd /opt/videoteca/videoteca-front && docker compose up -d"
echo "========================================"
