# dercarsten.de
My personal website (still under construction atm ;) ).

## Deployment

  - `git checkout` the branch / tag you want to deploy
  - build image `docker build --tag casi257/www:latest .`
  - push image to registry `docker push casi257/www:latest`
  - create `.env` for production use
  - upload `docker-compose.yml`
  - run `docker-compose up -d`
