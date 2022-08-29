class SessionsController < ApplicationController

  def login
    user = User.find_by(name: params[:name])
    if user
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Invalid user" }, status: 401
    end
  end

  def show
    if current_user
      render json: current_user
    else
      render json: { message: "No user logged in" }
    end
  end

  def logout
    session.delete :user_id
    head :no_content
  end

end
