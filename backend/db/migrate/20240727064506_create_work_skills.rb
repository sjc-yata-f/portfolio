class CreateWorkSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :work_skills do |t|
      t.references :work
      t.references :skill

      t.timestamps
    end
  end
end
