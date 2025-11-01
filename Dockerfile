# Development stage
FROM node:20-alpine AS development
WORKDIR /usr/src/app

COPY package*.json ./
RUN corepack enable && yarn install --frozen-lockfile

COPY . .

# Generate Prisma client
RUN npx prisma generate

USER node

# Build stage
FROM node:20-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
COPY --from=development /usr/src/app/node_modules ./node_modules
COPY . .

# Build the NestJS project
RUN yarn build

# Ensure Prisma client exists in build output
RUN npx prisma generate

ENV NODE_ENV=production
RUN yarn install --production --frozen-lockfile

USER node

# Production stage
FROM node:20-alpine AS production
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/generated ./generated

CMD ["node", "dist/main.js"]