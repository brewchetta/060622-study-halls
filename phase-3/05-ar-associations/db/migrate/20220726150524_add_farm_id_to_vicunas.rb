class AddFarmIdToVicunas < ActiveRecord::Migration[6.1]
  def change
    add_column :vicunas, :farm_id, :integer
  end
end
