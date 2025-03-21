# app.rb
require 'sinatra'

class PersonalWebsite < Sinatra::Base
  set :port, 8080

  configure :production do
    # List all domains (and subdomains) you want to allow
    set :allowed_hosts, ['ryanlons.com', 'www.ryanlons.com']
  end

  get '/' do
    'Hello world!'
    erb :index
  end

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

