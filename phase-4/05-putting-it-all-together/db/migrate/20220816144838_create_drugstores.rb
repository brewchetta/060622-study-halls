class CreateDrugstores < ActiveRecord::Migration[7.0]
  def change
    create_table :drugstores do |t|
      t.string :name
      t.string :location

      t.timestamps
    end
  end
end
