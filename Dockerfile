# Development Dockerfile for Apollo server and React client
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY ./server/package*.json ./server/
COPY ./client/package*.json ./client/
COPY ./shared/package*.json ./shared/
COPY ./shared/tsconfig.json ./shared/
COPY ./shared ./shared

# Install global dependencies
RUN npm install -g nodemon ts-node

# Install dependencies for shared, server, and client
WORKDIR /app/shared
RUN npm install

WORKDIR /app/server
RUN npm install

WORKDIR /app/client
RUN npm install

# Return to base working directory
WORKDIR /app

# Copy all source code
COPY ./server ./server
COPY ./client ./client
COPY ./shared ./shared

# Set environment to development
ENV NODE_ENV=development

# Expose server and client ports
EXPOSE 4000 3000

# Default command to run both server and client in dev mode
CMD ["sh", "-c", "cd /app/server && nodemon app.ts & cd /app/client && npm start"]
