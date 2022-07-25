class Llama

  attr_reader :breed
  attr_accessor :name, :is_sleeping, :current_pets, :sponsor

  @@all = []

  def initialize(name, breed)
    @name = name
    @breed = breed
    @is_sleeping = false
    @current_pets = 0

    # @sponsor = Sponsor.all.sample

    @@all << self
  end

  def self.all
    @@all
  end

  # finds a llama based on their name
  def self.find_llama_by_name(user_input)
    self.all.find do |llama|
      llama.name.downcase == user_input.downcase
    end
  end

end
