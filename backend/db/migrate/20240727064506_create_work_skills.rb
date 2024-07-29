class CreateWorkSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :work_skills do |t|
      t.references :work, null: false
      t.references :skill, null: false

      t.timestamps
    end
  end
end
