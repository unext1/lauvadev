# base node image
FROM node:20-bullseye-slim as base

RUN npm install -g pnpm

# install all node_modules, including dev
FROM base as deps

RUN mkdir /app/
WORKDIR /app/

ADD package.json pnpm-lock.yaml ./
# RUN pnpm install --production=false --no-optional --ignore-scripts
RUN pnpm install --production=false

# setup production node_modules
FROM base as production-deps

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json pnpm-lock.yaml /app/

# build app
FROM base as build

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules

# app code changes all the time
ADD . .
RUN pnpm build

# build smaller image for running
FROM base

ENV NODE_ENV=production

RUN mkdir /app/
WORKDIR /app/

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
ADD . .

CMD ["pnpm", "start"]