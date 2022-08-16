class DrugstoresController < ApplicationController
  before_action :find_drugstore, except: [:index, :create]

  def index
    render json: Drugstore.all
  end

  def show
    render json: @drugstore, serializer: DrugstoreShowSerializer
  end

  def create
    drugstore = Drugstore.create!(drugstore_params)
    render json: drugstore, status: 201
  end

  def update
    @drugstore.update!(drugstore_params)
    render json: @drugstore, status: :accepted
  end

  def destroy
    @drugstore.destroy
    head :no_content, status: :accepted
  end

  private

  def drugstore_params
    params.permit(:name, :location)
  end

end
