class Admin::CausesController < Admin::AdminBaseController
  before_action :set_selected_left_navi_link

  def new
    @cause = Cause.new
  end

  private

  def set_selected_left_navi_link
    @selected_left_navi_link = 'causes'
  end
end
