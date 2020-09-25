FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

RUN npm i -g npm && npm install --quiet && npm install -g nodemon --quiet && rm -rf /tmp/*

# RUN npm install -g pm2

# RUN npm rebuild bcrypt --build-from-source

# Bundle app source
COPY . .

EXPOSE 3000

# change user to newly created user
CMD ["npm", "run", "dev"]