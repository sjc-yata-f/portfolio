# frozen_string_literal: true

module V1
  class WorksController < ApplicationController
    def index
      works = Work.order(engaged_at: :desc)
      render json: works
    end
  end
end