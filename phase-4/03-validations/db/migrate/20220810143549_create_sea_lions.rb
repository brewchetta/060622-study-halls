class CreateSeaLions < ActiveRecord::Migration[7.0]
  def change
    create_table :sea_lions do |t|
      t.string :name
      t.decimal :weight
      t.integer :age
      t.string :location
      t.boolean :protected
      t.string :planet

      t.timestamps
    end
  end
end
