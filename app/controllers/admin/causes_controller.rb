class Admin::CausesController < Admin::AdminBaseController
  before_action :set_selected_left_navi_link

  def new
    @cause = Cause.new
  end

  def create
    @cause = Cause.new(cause_params)
    
    if @cause.save
      redirect_to admin_causes_path, notice:  "Cause created"
    else
      flash[:error] = "Cause creation failed"
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
