# app.rb
require 'sinatra'

class HelloWorldApp < Sinatra::Base
  get '/' do
    @name = "Kira"
    erb :index
  end

  get '/:name' do
    "Hello, #{params[:name]}!"
  end
end