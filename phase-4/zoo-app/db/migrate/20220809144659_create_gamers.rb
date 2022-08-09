class CreateGamers < ActiveRecord::Migration[7.0]
  def change
    create_table :gamers do |t|
      t.string :name
      t.integer :age
      t.string :species
      t.decimal :skill
      t.string :language

      t.timestamps
    end
  end
end
