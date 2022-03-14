FROM node:16.13.2 as build

WORKDIR /tmp/frontend

COPY . .

RUN npm install
RUN npm run build

##########

FROM nginx

COPY --from=build /tmp/frontend/build /usr/share/nginx/html
