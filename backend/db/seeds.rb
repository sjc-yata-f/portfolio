# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Skill.create!(name: 'Ruby')
Skill.create!(name: 'RubyOnRails')
Skill.create!(name: 'React')
Skill.create!(name: 'Typescript')
Skill.create!(name: 'Vue.js')

animals = %W(ねこ 犬 ペンギン すずめ シマエナガ くじら サメ イルカ さる フクロウ)
10.times do |n|
  work = Work.create!(
    title: "すごい仕事 No.#{}",
    description: "この仕事により世界中の#{animals[n]}が喜びました",
    engaged_at: Time.current - n.months,
    engaged_months: n + 1,
  )

  next if n.odd? 

  skills = Skill.all.sample(rand(7))
  skills.each { |skill| WorkSkill.create!(work: work, skill: skill) }
end