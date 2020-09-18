class CausesController < ApplicationController
  def index
    @causes = Cause.available.where(community: @current_community, archived: false, default_cause: false)
  end
end
