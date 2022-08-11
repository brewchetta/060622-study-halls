class JockeySerializer < ActiveModel::Serializer
  attributes :id, :name, :bmi

  # def attributes(*args)
  #   object.attributes.symbolize_keys
  # end

  has_many :horses

  # the object is the jockey itself
  def bmi
    (object.weight * 0.45) / ((object.height * 0.0254) ** 2)
  end

end
