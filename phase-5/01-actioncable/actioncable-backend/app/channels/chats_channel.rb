# delete this before lecture
# recreate with `rails g channel chats` and add code

class ChatsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_room_#{params[:room_id]}"
  end

  def unsubscribed
    stop_all_streams
  end
end
