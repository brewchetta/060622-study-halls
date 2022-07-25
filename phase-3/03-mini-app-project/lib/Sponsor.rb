class Sponsor

  attr_accessor :slogan, :company, :llamas

  @@all = []

  def initialize(slogan, company)
    @slogan = slogan
    @company = company

    @@all << self
  end

  def self.all
    @@all
  end

end
