class CreateHorses < ActiveRecord::Migration[7.0]
  def change
    create_table :horses do |t|
      t.string :breed
      t.string :name
      t.integer :jockey_id
      t.integer :speed_mph

      t.timestamps
    end
  end
end
