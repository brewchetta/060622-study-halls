class Farm

  attr_accessor :name, :location, :acreage

  @@all = []

  def initialize(name, acreage, location)
    @name = name
    @acreage = acreage
    @location = location

    @@all << self
  end

  def self.all
    @@all
  end

end
