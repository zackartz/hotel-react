FROM node:alpine as node
RUN npm i -g yarn
COPY . .
RUN yarn
CMD ["yarn", "start"]
EXPOSE 3000