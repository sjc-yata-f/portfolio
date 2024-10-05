# frozen_string_literal: true

module V1
  class WorksController < ApplicationController
    def index
      works = Work.preload(:skills).order(engaged_at: :desc)
      serialized = works.map { |w| w.serializable_hash(include: { skills: { only: 'name' } }) }
      render json: serialized
    end

    private

    def search_params
      params.permit(:skill)
    end
  end
end
