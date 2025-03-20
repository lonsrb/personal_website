# app.rb
require 'sinatra'

set :port, 8080
# set :static, true
# set :bind, '0.0.0.0'

get '/' do
  @name = "Kira"
  erb :index
end

class PersonalWebsite < Sinatra::Base

  get '/' do
    'Hello world!'
    @name = "Kira"
    erb :index
  end

  # get '/:name' do
  #   "Hello, #{params[:name]}!"
  # end
  # http://localhost:9292/listings?startIndex=0&count=20&propertyType=land
  #http://localhost:9292/listings?startIndex=21&count=20&propertyType=land,house
  #
  get '/listings' do
    start_index = params[:startIndex]
    count = params[:count]
    property_type = params[:propertyType]

    file = File.read('listings.json')
    data_array = JSON.parse(file)
    "got data: #{data_array.count} items, start_index: #{start_index}, count: #{count}, property_type: #{property_type}"
    if property_type != nil && property_type != ""
      property_types = property_type.split(",")
      data_array = data_array.select {|listing|  property_types.include? listing["propertyType"] }
    end
    if start_index != nil && count != nil
      count = count.to_i
      start_i = start_index.to_i
      if start_i >= data_array.count || count == 0
        data_array = []
      else
        end_i = start_i + (count -1)
        puts "end_i: #{end_i}"
        puts "data_array.count: #{data_array.count}"
        end_i = [data_array.count, end_i].min
        puts "new end_i: #{end_i}"
        data_array = data_array[start_i..end_i]
      end

    end
    JSON.pretty_generate(data_array)

  end  #ends get listings

  post '/favorite' do
    listing_id = params[:listingId]
    is_favorite = params[:isFavorite]

    "operation successful #{listing_id} is favorited: #{is_favorite == "true" ? "true" : "false"}"
  end
end

