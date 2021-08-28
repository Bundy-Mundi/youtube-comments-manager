# React
FROM node:14.17.3-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
CMD npm run build

# Nginx
FROM nginx:1.21.1
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
