class Prescription < ApplicationRecord
  belongs_to :customer
  belongs_to :drugstore

  validates :name, presence: true
  # validates :dosage, numericality: { greater_than_or_equal_to: 100, less_than_or_equal_to: 400 }
  validates :dosage, numericality: { in: 100..400 }
end
