FROM nginx:stable

COPY _site /usr/share/nginx/html
COPY docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/

RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 8080
