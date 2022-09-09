class User < ApplicationRecord
  has_secure_password

  def generate_password_token
    self.update(
      password_reset_token: generate_token,
      password_reset_expiration: Time.now.utc + 10.minutes
    )
  end

  def password_token_valid?
    self.password_reset_expiration > Time.now.utc
  end

  def reset_password(password)
    self.update(password: password, password_reset_token: nil, password_reset_expiration: Time.now.utc)
  end

  private

  def generate_token
    SecureRandom.hex(10)
  end

end
