require 'sinatra'
require './lib/random_content'

include RandomContent

get '/' do
  @quotes = RandomContent::quotes
  erb :index
end

error 400..510 do
  erb :error
end
