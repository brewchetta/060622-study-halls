Rails.application.routes.draw do

  # get '/gamers', to: 'gamers#index'
  # get '/gamers/:id', to: 'gamers#show'
  # post '/gamers', to: 'gamers#create'
  # patch '/gamers/:id', to: 'gamers#update'
  # delete '/gamers/:id', to: 'gamers#destroy'

  resources :fuels, only: [:index]

  resources :gamers, except: [:update, :destroy] do
    resources :fuels, only: [:index]
  end

  # '/gamers/:gamer_id/fuels' ==> get all the fuels for a specific gamer

end
