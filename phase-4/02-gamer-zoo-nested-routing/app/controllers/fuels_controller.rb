class FuelsController < ApplicationController

  def index
    if params[:gamer_id]
      gamer = Gamer.find_by(id: params[:gamer_id])
      render json: gamer.fuels
    else
      render json: Fuel.all
    end
  end

  def create
    fuel = Fuel.create(fuel_params)
  end

  private

  def fuel_params
    params.permit(:brand, :gamer_id)
  end

end
