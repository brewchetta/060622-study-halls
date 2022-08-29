class Message < ApplicationRecord

  belongs_to :room
  belongs_to :user

  # we'll use this later...
  # def broadcast
  #   ActionCable.server.broadcast("chat_room_#{self.room_id}", MessageSerializer.new(self))
  # end

end
