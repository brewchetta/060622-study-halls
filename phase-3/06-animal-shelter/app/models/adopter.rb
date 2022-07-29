class Adopter < ActiveRecord::Base

  has_many :pets
  has_many :shelters, through: :pets

  def full_name
    # self.first_name + " " + self.last_name
    "#{self.first_name} #{self.last_name}"
  end

  def adopt_pet(pet)
    if pet.adopted?
      "This pet has already been adopted!"
    else
      pet.update(adopter: self, adopted?: true)
    end
  end

  def fav_pet
    if self.pets.length > 0
      species_groups = self.pets.group(:species).count
      species_groups.max_by { |key, value| value }
    end
  end

end
