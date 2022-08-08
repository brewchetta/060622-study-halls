class RaccoonController < ApplicationController
  before_action :find_raccoon, only: [:show, :update, :destroy]

  def index
    raccoons = Raccoon.all
    render json: raccoons
  end

  def show
    render json: @raccoon, include: :dumpsters
  end

  def create
    raccoon = Raccoon.create(raccoon_params)
    render json: raccoon
  end

  def update
    @raccoon.update(raccoon_params)
    render json: @raccoon
  end

  def destroy
    @raccoon.destroy
    render json: @raccoon
  end

  def average_age
    render json: Raccoon.average_age
  end

  private

  def find_raccoon
    @raccoon = Raccoon.find_by(id: params[:id])
  end

  def raccoon_params
    params.permit(:name, :age, :has_rabies?)
  end

end
