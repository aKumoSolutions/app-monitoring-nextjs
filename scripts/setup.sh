#!/bin/bash 

curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
dnf install nodejs -y || exit
npm install -g npm@11.2.0 || exit

read -p "Please enter your backend ip address: " backend

echo "BACKEND_URL=http://$backend:8000" > .env.local

echo "✅ Node environment is ready. Build your app by exeucuting:"
echo "npm run build"