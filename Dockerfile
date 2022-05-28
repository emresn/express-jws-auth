FROM node:14-slim
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn install
COPY . /app
CMD yarn start
EXPOSE 3000