# Stage 1: Build Storybook static files
FROM node:22.15.0 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm run build:css
RUN npm run build-storybook

# Stage 2: Serve Storybook static files
FROM node:22.15.0 AS runner
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/storybook-static ./storybook-static
EXPOSE 6006
CMD ["http-server", "./storybook-static", "-p", "6006"]
