Rails.application.routes.draw do

  # resources for rooms and messages
  resources :rooms, only: [:index] do
    resources :messages, only: [:index, :create]
  end

  # "/rooms/1/messages"

  # auth / sessions
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  get "/me", to: "sessions#show"

  # what is this mystery route?
  # mount ActionCable.server => "/cable"

end
