class Raccoon < ApplicationRecord
  has_many :garbages
  has_many :dumpsters, through: :garbages

  def self.average_age
    self.all.average(:age).to_f
  end

  def hello
    "Hello my name is #{self.name} and I am a raccoon"
  end

end
