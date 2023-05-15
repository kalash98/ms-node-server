FROM node:20-alpine3.16

RUN mkdir -p /user/src/app/
WORKDIR /user/src/app/

RUN apk add --no-cache unzip

COPY package.json /user/src/app/
RUN npm install

COPY . /user/src/app/

EXPOSE 8081

ENTRYPOINT [ "npm", "run", "start" ]
