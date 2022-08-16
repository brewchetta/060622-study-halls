class Drugstore < ApplicationRecord
  has_many :prescriptions, dependent: :destroy
  has_many :customers, through: :prescriptions

  validates :name, :location, presence: true
end
