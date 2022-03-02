class Property < ApplicationRecord
    has_one_attached :avatar
    has_many :likes, dependent: :destroy
    has_many :unlikes, dependent: :destroy
end
