class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.integer :drugstore_id
      t.string :name
      t.boolean :on_holiday

      t.timestamps
    end
  end
end
