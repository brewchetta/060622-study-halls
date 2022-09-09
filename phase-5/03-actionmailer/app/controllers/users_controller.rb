class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def create
    user = User.create(user_params)
    if user.valid?
      UsersMailer.with(user: user).welcome.deliver
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end

end

# UserMailer.with(user: @user).welcome.deliver_later
