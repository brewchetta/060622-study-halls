class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

  private

  def record_not_found(error)
    render json: { error: "#{error.model} not found" }, status: :not_found
  end

  def invalid_record(error)
    render json: { errors: error.record.errors.full_messages }, status: 422
  end

end
