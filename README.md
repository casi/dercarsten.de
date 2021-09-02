# dercarsten.de

My personal website. (In the current state.)

## Development

Clone, cd into directory and install all needed gems and dependencies:

    bundle install

To start the server:

    bundle exec ruby app.rb

## Deployment

### Stand alone on bare Linux machine

Apache or Nginx server must be already installed and configured, also Phusion Passenger as app server to run the ruby app.

Upload e.g. via git in ```/var/www/myapp/code```

    bundle config set --local without 'development test'
    bundle install

### With Docker environment

Just install Docker and Docker Compose. That's it.

After upload, ```cd``` into the respective dir and:

    make deploy
