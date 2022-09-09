class PasswordsController < ApplicationController
  before_action :find_user

  def request_password_reset
    @user.generate_password_token

    PasswordsMailer.with(user: @user).reset_password.deliver_later

    render json: { message: "An email with instructions to reset your password has been sent." }
  end

  def reset_password

    if @user&.password_token_valid? && @user&.password_reset_token == params[:password_reset_token]

      temporary_password = SecureRandom.hex(10)
      @user.reset_password(temporary_password)
      PasswordsMailer.with(user: @user, temporary_password: temporary_password).temporary_password.deliver_later
      render json: { message: "A temporary password has been sent to your email address" }

    else

      PasswordsMailer.with(user: @user).invalid_password_reset.deliver_later
      render json: { error: "Invalid link or password reset timed out!" }

    end

  end

  private

  def find_user
    @user = User.find_by(id: params[:id])
  end

end
