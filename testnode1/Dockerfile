#start from a prebuilt node image so node is included
FROM node:7-alpine

WORKDIR /app

#copy your project directory into the image
COPY . /app

#install dependencies
RUN npm install

#run tests with mocha
RUN npm test

#expose the port from ehich the application will be accessed
EXPOSE 8081

#define the start script
CMD ["npm","start"]

