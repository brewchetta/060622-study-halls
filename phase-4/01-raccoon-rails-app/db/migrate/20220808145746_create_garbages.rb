class CreateGarbages < ActiveRecord::Migration[7.0]
  def change
    create_table :garbages do |t|
      t.integer :smelliness
      t.string :content
      t.integer :raccoon_id
      t.integer :dumpster_id

      t.timestamps
    end
  end
end
