class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :sender
      t.string :recipient
      t.string :recipient_address
      t.boolean :anonymous

      t.references :user, null: false, foreign_key: true
      t.references :papaya, null: false, foreign_key: true

      t.timestamps
    end
  end
end
