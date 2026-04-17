#!/bin/bash
# ssl-init.sh — Install Cloudflare Origin Certificate for pihudrive.lol
#
# This script is run ONCE on the server to place your Cloudflare Origin
# Certificate. You get the cert from the Cloudflare Dashboard — no renewal
# ever needed (valid 15 years).
#
# Prerequisites:
#   1. Domain pihudrive.lol added to Cloudflare with proxy (orange cloud) ON
#   2. SSL/TLS mode set to "Full (strict)" in Cloudflare dashboard
#   3. Origin Certificate generated at:
#      Cloudflare Dashboard → pihudrive.lol → SSL/TLS → Origin Server → Create certificate
#      - Choose "Let Cloudflare generate a key pair" (RSA 2048)
#      - Hostnames: pihudrive.lol, *.pihudrive.lol
#      - Validity: 15 years
#      - Format: PEM

set -e

SSL_DIR="$(cd "$(dirname "$0")" && pwd)/nginx/ssl"
mkdir -p "$SSL_DIR"

echo ""
echo "=========================================="
echo " Cloudflare Origin Certificate Setup"
echo "=========================================="
echo ""
echo "You have two options:"
echo ""
echo "OPTION A — Paste cert content interactively (recommended on first run):"
echo "-----------------------------------------------------------------------"

# --- Origin Certificate (the .crt / PEM content) ---
echo ""
echo "Paste your Cloudflare Origin Certificate below."
echo "Copy the text that begins with -----BEGIN CERTIFICATE-----"
echo "When done, press Enter then Ctrl+D:"
echo ""
ORIGIN_CERT=$(cat)
echo "$ORIGIN_CERT" > "$SSL_DIR/origin.crt"
echo "✅ Saved: $SSL_DIR/origin.crt"

# --- Private Key ---
echo ""
echo "Paste your Private Key below."
echo "Copy the text that begins with -----BEGIN PRIVATE KEY-----"
echo "When done, press Enter then Ctrl+D:"
echo ""
ORIGIN_KEY=$(cat)
echo "$ORIGIN_KEY" > "$SSL_DIR/origin.key"
chmod 600 "$SSL_DIR/origin.key"
echo "✅ Saved: $SSL_DIR/origin.key"

echo ""
echo "=========================================="
echo " Certificate installed successfully!"
echo " Now run: ./deploy.sh"
echo "=========================================="
echo ""
echo "OPTION B — Copy files manually (skip running this script):"
echo "----------------------------------------------------------"
echo "  scp origin.crt user@YOUR_SERVER:$(pwd)/nginx/ssl/origin.crt"
echo "  scp origin.key user@YOUR_SERVER:$(pwd)/nginx/ssl/origin.key"
echo "  chmod 600 $(pwd)/nginx/ssl/origin.key"
