# development:
start:
	bundle exec ruby app.rb

assets:
	#sassc --style compressed assets/stylesheet/normalize.scss public/css/normalize.css
	sassc --style compressed assets/stylesheet/style.scss public/css/style.css

# production
deploy:
	make assets
