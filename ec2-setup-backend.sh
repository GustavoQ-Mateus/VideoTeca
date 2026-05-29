#!/bin/bash
# EC2 #2 — Backend + Banco (Ubuntu 24.04 LTS)
# Executar como root: bash ec2-setup-backend.sh

set -e

apt-get update -y
apt-get install -y docker.io docker-compose-v2 git

systemctl enable docker
systemctl start docker

git clone https://github.com/SEU_USUARIO/VideoTeca.git /opt/videoteca
cd /opt/videoteca/videoteca-api

# Copie e edite o .env antes de continuar
cp .env.example .env
echo ""
echo "========================================"
echo "  Edite /opt/videoteca/videoteca-api/.env"
echo "  com POSTGRES_PASSWORD e CORS_ORIGINS"
echo "========================================"
echo "  Depois execute:"
echo "  cd /opt/videoteca/videoteca-api && docker compose up -d"
echo "========================================"
