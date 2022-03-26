FROM node:lts-alpine
RUN npm install -g nodemon
ENV NODE_ENV=production
ENV MONGO_USER="swadesh"
ENV MONGO_PASS="reddy"
ENV MONGO_DB="template"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
