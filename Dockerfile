# Build using bun
FROM oven/bun as build
WORKDIR /app
COPY . .
RUN bun i
RUN bun run build

# Nginx
FROM nginx:latest as server
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .