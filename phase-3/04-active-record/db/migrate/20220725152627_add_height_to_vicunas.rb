class AddHeightToVicunas < ActiveRecord::Migration[6.1]
  def change
    add_column :vicunas, :height_in_feet, :integer
  end
end
