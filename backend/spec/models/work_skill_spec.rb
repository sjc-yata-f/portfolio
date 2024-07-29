# frozen_string_literal: true

# == Schema Information
#
# Table name: work_skills
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  skill_id   :bigint           not null
#  work_id    :bigint           not null
#
# Indexes
#
#  index_work_skills_on_skill_id  (skill_id)
#  index_work_skills_on_work_id   (work_id)
#
require 'rails_helper'

RSpec.describe WorkSkill, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
