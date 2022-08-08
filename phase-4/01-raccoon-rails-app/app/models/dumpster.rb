class Dumpster < ApplicationRecord
  has_many :garbages
  has_many :raccoons, through: :garbages
end
