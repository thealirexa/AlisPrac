FROM node:20-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
COPY vite.config.ts ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as runtime
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
