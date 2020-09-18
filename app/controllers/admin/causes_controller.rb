class Admin::CausesController < Admin::AdminBaseController
  before_action :set_selected_left_navi_link

  def index
    @causes = Cause.available.where(community: @current_community, archived: false, default_cause: false)
    @default_cause = Cause.available.find_by(community: @current_community, default_cause: true)
    @archived_causes = Cause.available.where(community: @current_community, archived: true, default_cause: false)
  end

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

  def edit
    @cause = Cause.available.find(params[:id])
  end

  def update
    @cause = Cause.available.find(params[:id])
    if @cause.update(cause_params)
      redirect_to admin_causes_path, notice:  "Cause updated"
    else
      flash[:error] = @cause.errors.map {|k, v| (k.to_s + ' ' + v.to_s).humanize}.join(', ')
      render :action => :edit
    end
  end

  def destroy
    @cause = Cause.available.find(params[:id])
    if @cause.update(deleted: true)
      redirect_to admin_causes_path, notice: 'Cause deleted'
    else
      flash[:error] = @cause.errors.map {|k, v| (k.to_s + ' ' + v.to_s).humanize}.join(', ')
      render :action => :index
    end
  end

  private

  def set_selected_left_navi_link
    @selected_left_navi_link = 'causes'
  end

  def cause_params
    params.require(:cause).permit(:name, :description, :link, :logo, :archived)
  end
end
