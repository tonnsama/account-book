#!/bin/sh
npm install
npx sequelize-cli db:migrate
npm run dev
