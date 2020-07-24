class CreatePapayas < ActiveRecord::Migration[6.0]
  def change
    create_table :papayas do |t|
      t.string :name
      t.string :image
      t.string :custom_message
      t.integer :likes
      t.string :description

      t.timestamps
    end
  end
end
