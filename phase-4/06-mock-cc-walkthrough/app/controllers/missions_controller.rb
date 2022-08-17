class MissionsController < ApplicationController

  def index
    # accounting for nested routes
    if params[:scientist_id]
      scientist = Scientist.find(params[:scientist_id])
      render json: scientist.missions
    else
      render json: Mission.all
    end
  end

  def create
    mission = Mission.create!(mission_params)
    render json: mission.planet
  end

  private

  def mission_params
    params.permit(:name, :scientist_id, :planet_id)
  end

end
