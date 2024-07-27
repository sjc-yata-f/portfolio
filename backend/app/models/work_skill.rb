# frozen_string_literal: true

class WorkSkill < ApplicationRecord
  belongs_to :skill
  belongs_to :work
end
