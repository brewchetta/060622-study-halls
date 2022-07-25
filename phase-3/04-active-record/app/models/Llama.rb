class Llama

  attr_accessor :name, :breed, :farm

  @@all = []

  def initialize(name, breed, farm)
    @name = name
    @breed = breed
    @farm = farm

    @@all << self
  end

  def self.all
    @@all
  end

end
