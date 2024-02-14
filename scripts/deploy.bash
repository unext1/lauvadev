#!/bin/bash
set -e

cd "$(dirname "$0")/.."

pnpm typecheck
pnpm build

# SSH into the server and run commands
ssh oracle <<EOF
  echo "Connected to server"
  cd lauvadev
  git pull
  docker-compose build
  docker-compose up -d
  echo "Done"
EOF