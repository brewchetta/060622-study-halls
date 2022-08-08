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

ActiveRecord::Schema[7.0].define(version: 2022_08_08_145746) do
  create_table "dumpsters", force: :cascade do |t|
    t.string "color"
    t.string "size"
    t.boolean "has_trash"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "garbages", force: :cascade do |t|
    t.integer "smelliness"
    t.string "content"
    t.integer "raccoon_id"
    t.integer "dumpster_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "raccoons", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.boolean "has_rabies?"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
