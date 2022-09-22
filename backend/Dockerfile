FROM strapi/base:12

WORKDIR /usr/src/app

COPY package*.json ./

# RUN yarn install --ignore-engines 
RUN npm install -f 


COPY . .

RUN npm run build

CMD [ "npm", "run", "develop"]


# ref: https://github.com/strapi/strapi-docker/blob/master/examples/custom/Dockerfile

# FROM strapi/base:12

# WORKDIR /usr/src/app

# COPY ./package.json ./
# # COPY ./yarn.lock ./

# RUN npm install

# COPY . .

# RUN npm install --global pm2

# ENV NODE_ENV production
# ENV STRAPI_LOG_LEVEL error

# # RUN npm run build

# EXPOSE 1337

# # Run npm start script with PM2 when container starts
#  CMD ["npm", "run", "develop"]
