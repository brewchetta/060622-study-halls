class Farm < ActiveRecord::Base

  has_many :vicunas
  has_many :sponsors, through: :vicunas

  def add_vicuna_by_name(name)
    Vicuna
    .find_or_create_by(name: name)
    .update(farm: self)
  end

end
