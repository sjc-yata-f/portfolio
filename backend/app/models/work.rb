# frozen_string_literal: true

class Work < ApplicationRecord
  has_many :skills, through: :work_skills
end
