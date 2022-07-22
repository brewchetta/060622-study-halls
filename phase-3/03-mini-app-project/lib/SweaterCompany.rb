require_relative "./Sponsor"

class SweaterCompany < Sponsor

  attr_accessor :softness, :annual_sweater_output

  def initialize(slogan, company, softness, annual_sweater_output)
    @annual_sweater_output = annual_sweater_output
    @softness = softness
    super(slogan, company)
  end

end
