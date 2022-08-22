Rails.application.routes.draw do

  resources :raccoons
  resources :users, only: [:create]

  # HTTP VERB | URL | CONTROLLER | ACTION
  post '/login', to: 'sessions#create'

  get '/me', to: 'sessions#show'

  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
