FROM strapi/base:12

WORKDIR /usr/src/app

COPY package*.json ./

# RUN yarn install --ignore-engines 
RUN npm install -f 


COPY . .

RUN npm run build

CMD [ "npm", "run", "develop"]