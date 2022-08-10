class SeaLion < ApplicationRecord

  validates :name, :age, presence: true
  validates :name, uniqueness: true
  # validates :age, numericality: { greater_than_or_equal_to: 1, less_than: 500 }
  validates :age, numericality: { in: 1..500 }
  validates :planet, inclusion: { in: ["neptune", "saturn", "mars", "jupiter", "uranus"] }

  validate :must_be_capitalized_name

  private

  def must_be_capitalized_name
    unless self.name.capitalize.strip == self.name
      errors.add(:name, "must be capitalized with no blank spaces on the beginning or end")
    end
  end

end
