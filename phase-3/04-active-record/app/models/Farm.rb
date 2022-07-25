class Farm

  attr_accessor :name, :acreage

  @@all = []

  def initialize(name, acreage)
    @name = name
    @acreage = acreage

    @@all << self
  end

  def self.all
    @@all
  end

end
