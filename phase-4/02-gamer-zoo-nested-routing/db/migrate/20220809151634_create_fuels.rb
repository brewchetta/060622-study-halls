class CreateFuels < ActiveRecord::Migration[7.0]
  def change
    create_table :fuels do |t|
      t.string :brand
      t.integer :sugar_grams
      t.integer :caffeine_mg
      t.integer :gamer_id

      t.timestamps
    end
  end
end
