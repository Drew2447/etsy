class Product < ApplicationRecord
  belongs_to :seller

  def self.for_sale
    Product.find_by_sql("SELECT p.id AS product_id, price, description, category, first_name,
    last_name, email, s.id AS seller_id 
    FROM products AS p
    INNER JOIN sellers AS s
    ON p.seller_id = s.id
    WHERE p.sold = false;")
  end

  def self.categories
    categories = Product.find_by_sql("SELECT DISTINCT category FROM products")
    categories.map do |c|
      c.category
    end
  end

  def self.by_category(category)
    Product.find_by_sql(["SELECT id, description FROM products
    WHERE sold = false AND LOWER(category) = ?", category.downcase])
  end
end