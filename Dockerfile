# Use Node LTS (your Bitnami server shows Node 22)
FROM node:22-alpine

WORKDIR /app

# Install deps first (better cache)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

# If your start is "node server.js", keep this:
CMD ["node", "server.js"]
