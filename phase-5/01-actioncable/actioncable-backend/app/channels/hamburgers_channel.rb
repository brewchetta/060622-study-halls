class HamburgersChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_#{params[:room_id]}"
  end

  def unsubscribed
    puts "=================================================="
    puts "HELLLO I AM UNSUBSCRIBED"
    puts "--------------------------------------------------"
  end
end
