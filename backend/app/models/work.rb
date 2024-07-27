# frozen_string_literal: true

# == Schema Information
#
# Table name: works
#
#  id                               :bigint           not null, primary key
#  description(説明)                :text
#  engaged_at(従事開始日)           :date
#  engaged_months(従事期間(月単位)) :integer
#  title(仕事の名称)                :string           not null
#  created_at                       :datetime         not null
#  updated_at                       :datetime         not null
#
class Work < ApplicationRecord
  has_many :work_skills
  has_many :skills, through: :work_skills
end
