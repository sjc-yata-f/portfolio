class CreateWorks < ActiveRecord::Migration[7.1]
  def change
    create_table :works do |t|
      t.string :title, null: false, comment: '仕事の名称'
      t.text :description, comment: '説明'
      t.integer :engaged_months, comment: '従事期間(月単位)'
      t.date :engaged_at, comment: '従事開始日'

      t.timestamps
    end
  end
end
