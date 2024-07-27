# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_07_27_064506) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "skills", force: :cascade do |t|
    t.string "name", null: false, comment: "技術の名称"
    t.text "note", comment: "備考"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "work_skills", force: :cascade do |t|
    t.bigint "work_id", null: false
    t.bigint "skill_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["skill_id"], name: "index_work_skills_on_skill_id"
    t.index ["work_id"], name: "index_work_skills_on_work_id"
  end

  create_table "works", force: :cascade do |t|
    t.string "title", null: false, comment: "仕事の名称"
    t.text "description", comment: "説明"
    t.integer "engaged_months", comment: "従事期間(月単位)"
    t.date "engaged_at", comment: "従事開始日"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
