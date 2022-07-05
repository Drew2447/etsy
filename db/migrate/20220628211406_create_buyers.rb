class CreateBuyers < ActiveRecord::Migration[7.0]
  def change
    create_table :buyers do |t|
      t.string :first_name
      t.float :max_price
      t.string :desired_cat
      t.belongs_to :seller, null: false, foreign_key: true

      t.timestamps
    end
  end
end
