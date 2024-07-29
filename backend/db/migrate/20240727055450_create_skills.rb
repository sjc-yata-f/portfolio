class CreateSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :skills do |t|
      t.string :name, null: false, comment: '技術の名称'
      t.text :note, comment: '備考'

      t.timestamps
    end
  end
end
