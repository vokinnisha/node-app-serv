FROM node
WORKDIR /usr/src/project-mira

COPY package*.json ./

COPY . .

RUN npm install


EXPOSE 3300

CMD [ "node", "server.js" ]