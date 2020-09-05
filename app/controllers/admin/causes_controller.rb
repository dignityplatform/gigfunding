class Admin::CausesController < Admin::AdminBaseController
  before_action :set_selected_left_navi_link

  def new
    @cause = Cause.new
  end

  def create
    @cause = Cause.new(cause_params)
    @cause.community = @current_community
    
    if @cause.save
      redirect_to admin_causes_path, notice:  "Cause created"
    else
      flash[:error] = @cause.errors.map {|k, v| (k.to_s + ' ' + v.to_s).humanize}.join(', ')
      render :action => :new
    end
  end

  private

  def set_selected_left_navi_link
    @selected_left_navi_link = 'causes'
  end

  def cause_params
    params.require(:cause).permit(:name, :description, :link, :logo)
  end
end
