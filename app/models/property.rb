class Property < ApplicationRecord
    has_one_attached :avatar
    has_one_attached :image
    has_many :likes, dependent: :destroy
    has_many :buyers
    belongs_to :user
end
