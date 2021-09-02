# docker-compose flippin' short
COMPOSE = docker-compose -f docker-compose.yml

# development:
assets:
	sassc --style compressed assets/stylesheet/style.scss public/css/style.css

build:
	make -B assets
	docker build --tag sinatra-site .

start:
	docker run -p 80:4567 sinatra-site

# production

deploy:
	make build 
	$(COMPOSE) up -d
