FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies first (better Docker caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy all source code
COPY . .

# Expose backend port
EXPOSE 5000

# Use non-root user for security (best practice)
USER node

# Start the application
CMD ["node", "index.js"]
