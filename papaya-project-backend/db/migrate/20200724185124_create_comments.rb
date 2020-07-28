class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :star_rating
      t.datetime :date
      t.references :papaya, null: false, foreign_key: true

      t.timestamps
    end
  end
end
