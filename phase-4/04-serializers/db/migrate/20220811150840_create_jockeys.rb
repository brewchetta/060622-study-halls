class CreateJockeys < ActiveRecord::Migration[7.0]
  def change
    create_table :jockeys do |t|
      t.integer :height
      t.float :weight
      t.string :name

      t.timestamps
    end
  end
end
