class Property < ApplicationRecord
    has_one_attached :avatar
    has_many :likes, dependent: :destroy
    has_many :buyers
    # has_many :unlikes, dependent: :destroy
    belongs_to :user
end
