FROM node:latest
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --development --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
