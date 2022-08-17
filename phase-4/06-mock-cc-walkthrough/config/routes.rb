Rails.application.routes.draw do

  resources :missions, only: [:index, :create]
  resources :planets

  resources :scientists do
    resources :missions, only: [:index]
  end

end
