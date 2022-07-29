class CreateRaccoons < ActiveRecord::Migration[6.1]
  def change
    create_table :raccoons do |t|
      t.string :name
      t.integer :mischeviousness
      t.boolean :rabies
    end
  end
end
