FROM node:20-alpine AS base
RUN npm install -g pnpm

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/backend/package.json ./apps/backend/
COPY packages/database/package.json ./packages/database/
RUN pnpm install --frozen-lockfile

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/apps/backend/node_modules ./apps/backend/node_modules
COPY --from=dependencies /app/packages/database/node_modules ./packages/database/node_modules
RUN cd packages/database && pnpm generate
RUN cd apps/backend && pnpm build

FROM base AS deploy
WORKDIR /app
COPY --from=build /app/apps/backend/dist ./apps/backend/dist
COPY --from=build /app/apps/backend/package.json ./apps/backend/
COPY --from=build /app/packages/database ./packages/database
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 3001
CMD ["node", "apps/backend/dist/main.js"]