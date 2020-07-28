class User < ApplicationRecord
    # has_many :comments
    # # has_many :papayas
    # has_many :papayas, through: :comments
    has_many :orders
    # has_many :papayas, through: :orders
end
