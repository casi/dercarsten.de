# dercarsten.de
My personal website (still under construction atm ;) ).

## Deployment (initial)

  - `git checkout` the branch / tag you want to deploy
  - build image `docker build --tag casi257/www:latest .`
  - push image to registry `docker push casi257/www:latest`
  - create `.env` for production use
  - upload `docker-compose.yml`
  - run `docker-compose up -d`

### Updating running service

  - build image `docker build --tag casi257/www:latest .`
  - push image to registry `docker push casi257/www:latest`
  - after push go to server console
  - pull image updates `docker-compose pull`
  - stop all new services `docker-compose stop app`
  - remove all stopped containers `docker-compose rm` 
  - to restart all services `docker-compose up -d` 
  