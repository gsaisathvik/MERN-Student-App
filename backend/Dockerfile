# Use Node.js LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start backend
CMD ["npm", "run", "dev"]
