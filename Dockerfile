FROM node:alpine
WORKDIR /back
COPY . /back
RUN npm install --production
EXPOSE 80