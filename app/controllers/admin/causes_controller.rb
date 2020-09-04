class Admin::CausesController < Admin::AdminBaseController
  before_action :set_selected_left_navi_link
  # before_action :set_service

  def new
    @cause = Cause.new
  end

  private

  def set_selected_left_navi_link
    @selected_left_navi_link = 'causes'
  end

  # def set_service
  #   @service = Admin::SettingsService.new(
  #     community: @current_community,
  #     params: params)
  # end

end
