FROM node:9.11.2
COPY package.json package-lock.json ./
RUN npm install
COPY index.js .
CMD ["node", "index.js"]

