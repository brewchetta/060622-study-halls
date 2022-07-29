class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # INDEX (READ)
  get "/raccoons" do
    # "/raccoons?name=Rachel&age=10"
    if params[:name]
      Raccoon.where(name: params[:name]).to_json
    else
      Raccoon.all.to_json
    end
  end

  # SHOW (READ)
  get "/raccoons/:value" do
    begin
      found_raccoon = Raccoon.find(params[:value]) || Raccoon.find_by(name: params[:value])
      found_raccoon.to_json
    rescue
      { error: "Couldn't find that darn raccoon" }.to_json
    end
  end

  # CREATE (CREATE)
  post "/raccoons" do
    created_raccoon = Raccoon.create(params)
    created_raccoon.to_json
  end

  # UPDATE (UPDATE)
  patch "/raccoons/:id" do
    begin
      found_raccoon = Raccoon.find(params[:id])
      found_raccoon.update(params)
      if found_raccoon.rabies
        found_raccoon.mischeviousness = 10
        found_raccoon.save
      end
      found_raccoon.to_json
    rescue
      { error: "Couldn't find that darn raccoon" }.to_json
    end
  end

  # DESTROY (DELETE)
  delete "/raccoons/:id" do
    begin
      found_raccoon = Raccoon.find(params[:id])
      if found_raccoon.rabies
        found_raccoon.destroy
        {}.to_json
      else
        { message: "This raccoon doesn't have rabies so they LIVE" }.to_json
      end
    rescue
      { error: "Couldn't find that darn raccoon" }.to_json
    end
  end

  # CUSTOM RABIES GIVING ROUTE
  patch "/give-rabies" do
    Raccoon.all.map { |raccoon| raccoon.update(rabies: true) }
    Raccoon.all.to_json
  end

  # CUSTOM SEARCH BY NAME
  get "/raccoons/name-search/:name" do
    found_raccoon = Raccoon.find_by(name: params[:name])
    found_raccoon.to_json
  end

end

# get "/" do
#   { super_important_message: "Hello I like raccoons" }.to_json
# end

# # fetch('http://localhost:9292/raccoons', { method: 'DELETE' })
# delete "/raccoons" do
#   { message: "You are at the delete for raccoons" }.to_json
# end
