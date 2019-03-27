class OrderSerializer < ActiveModel::Serializer
  attributes :id

  has_many :order_items
  has_many :products, through: :order_items
end
