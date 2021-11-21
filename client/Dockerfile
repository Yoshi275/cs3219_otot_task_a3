FROM node:16.13-alpine

# set working directory
WORKDIR /app

# add Node to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy files
COPY ./src ./src
COPY ./public ./public
COPY package.json ./
COPY yarn.lock ./

# install app dependencies
RUN yarn install --silent
# handle babel case separately
RUN npm install --silent @babel/core @babel/preset-env    

# start app
CMD ["yarn", "start"]