# Step 1
FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app
WORKDIR /app/packages/web
RUN yarn
COPY . /app

RUN yarn install
RUN yarn build
 
# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/packages/web/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]