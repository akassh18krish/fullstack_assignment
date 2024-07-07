# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set work directory
WORKDIR /app

# Install dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

# Copy project
COPY . /app

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
