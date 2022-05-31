# Dockerfile
FROM ruby:2.7-slim

ENV BUNDLE_VERSION 2.3.14
RUN apt-get update; \
    apt-get install -y --no-install-recommends \
            git \
            make \
            build-essential \
    ; \
    rm -rf /var/lib/apt/lists/*

WORKDIR /code
COPY . /code

RUN gem install bundler --version "$BUNDLE_VERSION"
RUN bundle config set --local without 'development test'; \
    bundle install

EXPOSE 4567

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "4567"]
