class Pet < ActiveRecord::Base

  belongs_to :shelter
  belongs_to :adopter

  def self.oldest
    max_age = self.maximum(:age)
    self.find_by(age: max_age)
  end

  def self.average_age
    self.average(:age).to_i
  end

  def in_dog_years
    if self.species == "dog"
      self.age * 7
    else
      "Not a dog so does not compute"
    end
  end

end
