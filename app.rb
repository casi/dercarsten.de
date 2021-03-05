require 'sinatra'
require './lib/random_content'

include RandomContent

get '/' do
  @quotes = RandomContent::quotes
  erb :index
end

get '/links' do
  erb :links
end

error 400..510 do
  erb :error
end
