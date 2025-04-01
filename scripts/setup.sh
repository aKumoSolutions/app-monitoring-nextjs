#!/bin/bash 

curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
dnf install nodejs -y || exit
npm install -g npm@11.2.0 || exit