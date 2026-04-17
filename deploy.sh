#!/bin/bash
# deploy.sh — Deploy Engineered Moments by Kishore to pihudrive.lol
set -e

echo "🚀 Deploying Engineered Moments by Kishore..."

# Check required environment variables
required_vars=("DB_PASSWORD" "NEXTAUTH_SECRET" "GOOGLE_CLIENT_ID" "GOOGLE_CLIENT_SECRET" "ADMIN_EMAILS")
for var in "${required_vars[@]}"; do
    if [[ -z "${!var}" ]]; then
        echo "❌ Error: $var is not set. Update your .env file."
        exit 1
    fi
done
echo "✅ Environment variables verified"

# Check Cloudflare Origin Certificate is present
if [[ ! -f "nginx/ssl/origin.crt" || ! -f "nginx/ssl/origin.key" ]]; then
    echo ""
    echo "❌ Cloudflare Origin Certificate not found!"
    echo "   Run ./ssl-init.sh first to install your certificate, or copy:"
    echo "     nginx/ssl/origin.crt"
    echo "     nginx/ssl/origin.key"
    echo ""
    exit 1
fi
echo "✅ SSL certificate found"

# Pull latest changes
git pull origin main

# Build and start containers
docker compose down --remove-orphans
docker compose build --no-cache
docker compose up -d

echo "⏳ Waiting for database..."
sleep 5

# Run database migrations
docker compose exec app npx prisma migrate deploy

echo ""
echo "✅ Migrations applied"
echo "✅ Deployment complete! Site live at https://pihudrive.lol"
