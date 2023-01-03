# Dockerfile
FROM nginx:1.23.3-alpine

# Copy the build output to the default nginx public folder
COPY /docs /usr/share/nginx/html
