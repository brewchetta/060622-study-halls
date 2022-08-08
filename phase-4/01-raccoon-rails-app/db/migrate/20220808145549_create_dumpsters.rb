class CreateDumpsters < ActiveRecord::Migration[7.0]
  def change
    create_table :dumpsters do |t|
      t.string :color
      t.string :size
      t.boolean :has_trash
      t.string :location

      t.timestamps
    end
  end
end
