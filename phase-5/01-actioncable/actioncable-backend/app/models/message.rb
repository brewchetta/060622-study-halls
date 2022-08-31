class Message < ApplicationRecord

  belongs_to :room
  belongs_to :user

  def broadcast
    ActionCable.server.broadcast("room_#{self.room_id}", MessageSerializer.new(self))
  end

end
