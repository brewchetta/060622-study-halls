class CreatePrescriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :prescriptions do |t|
      t.string :name
      t.integer :dosage
      t.boolean :legality, default: true
      t.integer :drugstore_id
      t.integer :customer_id

      t.timestamps
    end
  end
end
