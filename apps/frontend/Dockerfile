FROM node:20-alpine AS base
RUN npm install -g pnpm

FROM base AS dependencies
WORKDIR /app
COPY apps/frontend/package.json ./
RUN pnpm install --frozen-lockfile

FROM base AS build
WORKDIR /app
COPY apps/frontend ./
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build

FROM nginx:alpine AS deploy
COPY --from=build /app/dist /usr/share/nginx/html
COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]