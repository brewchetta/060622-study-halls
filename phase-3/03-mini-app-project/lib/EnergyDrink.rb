require_relative "./Sponsor"

class EnergyDrink < Sponsor

  attr_accessor :hardcoreness, :caffeine_level

  def initialize(slogan, company, hardcoreness, caffeine_level)
    super(slogan, company)
    @hardcoreness = hardcoreness
    @caffeine_level = caffeine_level
  end

end
