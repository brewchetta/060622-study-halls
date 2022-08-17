class Scientist < ApplicationRecord
  has_many :missions, dependent: :destroy
  has_many :planets, through: :missions

  validates :name, :field_of_study, presence: true
  validates :name, uniqueness: true

  def full_description
    "#{self.name}: #{self.field_of_study}"
  end
end
