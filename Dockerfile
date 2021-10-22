FROM node:14-alpine

ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /usr/src/nodejs
COPY package*.json ./
RUN npm ci

RUN apk add --no-cache git vim openssh
