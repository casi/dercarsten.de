# Dockerfile
FROM nginx:1.26.2-alpine

# Copy the build output to the default nginx public folder
COPY /docs /usr/share/nginx/html
