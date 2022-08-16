class SeaLionsController < ApplicationController

  def index
    render json: SeaLion.all
  end

  def create
    begin
      render json: SeaLion.create!(sea_lion_params)
    rescue
      render json: { message: "This is the rescue" }
    end
  end

  private

  def sea_lion_params
    params.permit(:name, :weight, :age, :protected, :location, :planet)
  end

end
