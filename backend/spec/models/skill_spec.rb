# frozen_string_literal: true

# == Schema Information
#
# Table name: skills
#
#  id               :bigint           not null, primary key
#  name(技術の名称) :string           not null
#  note(備考)       :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'rails_helper'

RSpec.describe Skill, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
