# Use Ubuntu-based Node.js image which might work better with Railway
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --only=production --legacy-peer-deps

# Copy source code
COPY . .

# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S vietnam-planner -u 1001

# Change ownership of the app directory
RUN chown -R vietnam-planner:nodejs /app
USER vietnam-planner

# Expose port (Railway will set PORT environment variable)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node --version || exit 1

# Start the application
CMD ["npm", "start"]