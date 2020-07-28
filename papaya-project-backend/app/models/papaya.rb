class Papaya < ApplicationRecord
    has_many :comments
    has_many :orders
    # has_many :users, through: :comments
end
