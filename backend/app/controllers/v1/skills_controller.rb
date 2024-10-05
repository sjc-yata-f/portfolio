# frozen_string_literal: true

module V1
  class SkillsController < ApplicationController
    def index
      skills = Skill.order(created_at: :desc)
      render json: skills
    end
  end
end
