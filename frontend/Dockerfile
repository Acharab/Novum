FROM node:14
# FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
# COPY yarn.lock /usr/src/app/
COPY .next /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
# CMD ["npm", "run", "start"]
CMD ["npm", "run", "dev"]