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
require 'rails_helper'

RSpec.describe Work, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
