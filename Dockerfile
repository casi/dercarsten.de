# Dockerfile
FROM ruby:3.1-slim

RUN apt-get update; \
    apt-get install -y --no-install-recommends \
            git \
            make \
            build-essential \
    ; \
    rm -rf /var/lib/apt/lists/*

WORKDIR /code
COPY . /code
RUN bundle config set --local without 'development test'; \
    bundle install

EXPOSE 4567

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "4567"]
