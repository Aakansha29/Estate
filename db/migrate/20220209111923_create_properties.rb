class CreateProperties < ActiveRecord::Migration[5.2]
  def change
     
     
     create_table :properties do |t|
      t.string :title
      t.integer :property_type
      t.string :location
      t.string :rate
      t.string :area

      t.timestamps
    end
  end
end
