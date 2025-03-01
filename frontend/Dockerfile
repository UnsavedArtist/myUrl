# 1st Stage: Build the React application
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# 2nd Stage: Serve with Nginx
FROM nginx:alpine

# Copy compiled React build from previous stage into Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

