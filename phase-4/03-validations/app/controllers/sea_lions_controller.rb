class SeaLionsController < ApplicationController

  def index
    render json: SeaLion.all
  end

  def create
    render json: SeaLion.create!(sea_lion_params)
  end

  private

  def sea_lion_params
    params.permit(:name, :weight, :age, :protected, :location, :planet)
  end

end
