FROM node:14
WORKDIR /usr/src/app
COPY gamestore/package*.json ./
RUN npm install
COPY gamestore/ .
EXPOSE 3002
CMD ["npm", "start"]
