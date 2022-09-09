Rails.application.routes.draw do
  resources :users

  get '/users/:id/reset_password', to: 'passwords#request_password_reset'
  get '/users/:id/reset_password/:password_reset_token', to: 'passwords#reset_password'
end
