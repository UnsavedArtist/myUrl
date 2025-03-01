# Use an official Node LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ../package*.json ./

# Install production dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose the port your API will run on
EXPOSE 3000

# Define the command to start your app
CMD ["npm", "start"]

