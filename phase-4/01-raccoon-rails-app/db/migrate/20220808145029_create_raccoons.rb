class CreateRaccoons < ActiveRecord::Migration[7.0]
  def change
    create_table :raccoons do |t|
      t.string :name
      t.integer :age
      t.boolean :has_rabies?

      t.timestamps
    end
  end
end
