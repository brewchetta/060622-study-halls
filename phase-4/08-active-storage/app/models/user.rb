class User < ApplicationRecord
  has_secure_password

  has_one_attached :avatar

  # def avatar_url
  #   if self.avatar.attached?
  #     rails_blob_path(self.avatar)
  #   end
  # end

end
