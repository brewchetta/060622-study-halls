class Sponsor < ActiveRecord::Base

  has_many :vicunas
  has_many :farms, through: :vicunas

end
