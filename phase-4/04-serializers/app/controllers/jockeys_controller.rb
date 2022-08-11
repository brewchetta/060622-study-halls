class JockeysController < ApplicationController

  def index
    render json: Jockey.all
  end

  def show
    jockey = Jockey.find_by(id: params[:id])
    render json: jockey, serializer: JockeyShowSerializer
  end

end
