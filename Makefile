# docker-compose flipping out on me, so I'm using make
COMPOSE = docker-compose -f docker-compose.yml

assets:
	sassc --style compressed assets/stylesheet/style.scss docs/css/style.css

build:
	make -B assets
	docker build --tag static-site .

start:
	docker run --rm -it -p 8080:80 static-site

deploy:
	make build
	$(COMPOSE) up -d
