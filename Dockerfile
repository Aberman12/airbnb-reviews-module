FROM node:7
COPY . /airbnb-starter-copy/
WORKDIR /airbnb-starter-copy
RUN npm install
CMD [ "node", "./server/index.js"]
EXPOSE 5000