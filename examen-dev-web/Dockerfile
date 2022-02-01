FROM node:lts-alpine as Build
WORKDIR /app
ENV NODE_ENV=production
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
COPY . .
RUN yarn build --prod

FROM nginx:alpine
COPY --from=Build /app/dist/examen-dev-web /usr/share/nginx/html
EXPOSE 80
