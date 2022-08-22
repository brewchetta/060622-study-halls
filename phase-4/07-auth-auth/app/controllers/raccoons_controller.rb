class RaccoonsController < ApplicationController

  # this route is protected by authorize
  # we cannot access it unless someone is logged in!
  def show
    raccoon = Raccoon.find(params[:id])
    render json: raccoon
  end

end
