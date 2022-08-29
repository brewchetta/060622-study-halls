class MessagesController < ApplicationController

  def index
    if find_room
      render json: @room.messages
    else
      render json: { error: 'Could not find a room with that id' }, status: 404
    end
  end

  def create
    message = current_user.messages.create(message_params)
    render json: message, status: :created
  end

  private

  def message_params
    params.permit(:content, :room_id)
  end

  def find_room
    @room ||= Room.find_by(id: params[:room_id])
  end

end
