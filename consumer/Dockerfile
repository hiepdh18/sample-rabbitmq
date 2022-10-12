FROM node:13-alpine

WORKDIR /app

COPY . .

RUN yarn install

# Development
CMD ["yarn", "start", "dev"]