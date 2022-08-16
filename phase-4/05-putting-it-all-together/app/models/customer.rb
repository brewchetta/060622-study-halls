class Customer < ApplicationRecord
  has_many :prescriptions, dependent: :destroy
  has_many :drugstores, through: :prescriptions

  validates :name, :age, presence: true
  validates :age, numericality: { greater_than_or_equal_to: 18 }

end
