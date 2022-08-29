class RoomsController < ApplicationController

  def index
    render json: Room.all, include: :messages
  end

end
