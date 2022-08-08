Rails.application.routes.draw do
  # get 'dumpster/index'
  # get 'dumpster/show'
  # post '/dumpsters',
  # get 'dumpster/update'
  # get 'dumpster/destroy'
  # HTTP VERB // PATH // CONTROLLER // ACTION
  get "/raccoons", to: "raccoon#index"
  get "/raccoons/:id", to: "raccoon#show"
  post "/raccoons", to: "raccoon#create"
  patch "/raccoons/:id", to: "raccoon#update"
  delete "/raccoons/:id", to: "raccoon#destroy"
  get "/raccoons/average-age", to: "raccoon#average_age"
end
