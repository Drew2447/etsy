class Seller < ApplicationRecord
  class Agent < ApplicationRecord
    has_many :products
    has_many :buyers
  end
end
