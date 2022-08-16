class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  private

  def find_drugstore
    @drugstore = Drugstore.find(params[:id])
  end

  def record_not_found(error)
    render json: { error: error.message }, status: 404
  end

  def record_invalid(error)
    render json: { error: error.message }, status: 422
  end

end
