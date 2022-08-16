class DrugstoreShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :location

  has_many :prescriptions
  has_many :customers
end
