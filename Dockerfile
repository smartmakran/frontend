FROM bitnami/node:14 AS build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn config set network-timeout 3000000
RUN export NODE_OPTIONS='--max-old-space-size=16384'
RUN NODE_OPTIONS="--max-old-space-size=16384" CYPRESS_INSTALL_BINARY=0 yarn --frozen-lockfile

COPY . .
RUN SILENT=1 yarn run build


FROM bitnami/node:14-prod AS prod
WORKDIR /app

COPY --from=build /app .

EXPOSE 5000 8080

CMD ["yarn", "preview"]
