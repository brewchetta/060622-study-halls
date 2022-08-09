class GamersController < ApplicationController
  before_action :find_gamer, except: [:index, :create]

  def index
    render json: Gamer.all
  end

  def show
    render json: @gamer
  end

  def create
    gamer = Gamer.create(gamer_params)
    render json: gamer, status: :created
  end

  private

  def find_gamer
    @gamer = Gamer.find_by(id: params[:id])
  end

  def gamer_params
    params.permit(:name, :age, :species, :skill, :language)
  end

end
