class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.boolean :member
      t.integer :age

      t.timestamps
    end
  end
end
