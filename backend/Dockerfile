FROM node:16.13.2 as build

WORKDIR /tmp/backend

COPY . .

RUN npm install
RUN npm run build

##########

FROM node:16.13.2

WORKDIR /usr/backend

EXPOSE 80

COPY package.json .
COPY config ./config
COPY --from=build /tmp/backend/dist ./dist
COPY --from=build /tmp/backend/node_modules ./node_modules

CMD ["npm", "start"]
