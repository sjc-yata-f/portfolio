class CreateWorks < ActiveRecord::Migration[7.1]
  def change
    create_table :works do |t|
      t.string :title, null: false
      t.text :description
      t.integer :engaged_months
      t.date :engaged_at

      t.timestamps
    end
  end
end
