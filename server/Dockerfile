FROM node:16.13-alpine

# set working directory
WORKDIR /app

# add Node to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . ./
RUN npm install --silent

# start app
CMD ["node", "server.js"]