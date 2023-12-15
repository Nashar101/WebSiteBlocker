class BlockedsitesController < ApplicationController
  before_action :set_blockedsite, only: %i[ show edit update destroy ]
  helper_method :decrease, :displayDays
  # GET /blockedsites or /blockedsites.json
  def index
    @blockedsites = Blockedsite.all
    @blockedsite = Blockedsite.new
  end

  # GET /blockedsites/1 or /blockedsites/1.json
  def show
  end

  # GET /blockedsites/new
  def new
    @blockedsite = Blockedsite.new
  end

  # GET /blockedsites/1/edit
  def edit
  end

  # POST /blockedsites or /blockedsites.json
  def create
    @blockedsite = Blockedsite.new(blockedsite_params)
    if @blockedsite.days == nil
      @blockedsite.days = 0
    end
    if @blockedsite.hours == nil
      @blockedsite.hours = 0
    end
    if @blockedsite.minutes == nil
      @blockedsite.minutes = 0
    end
    if @blockedsite.seconds == nil
      @blockedsite.seconds = 0
    end
    @blockedsite.duedate = (Time.now + (@blockedsite.days*24*60*60) +(@blockedsite.hours*60*60) + (@blockedsite.minutes*60) + (@blockedsite.seconds))
    @blockedsite.save
    /respond_to do |format|
      if @blockedsite.save
        flash[:notice] =  "Blockedsite was successfully created."
        format.html { redirect_to blockedsites_path, notice: "Blockedsite was successfully created." }
        format.json { render :show, status: :created, location: @blockedsite }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @blockedsite.errors, status: :unprocessable_entity }
      end
    end/
  end

  # PATCH/PUT /blockedsites/1 or /blockedsites/1.json
  def update
    respond_to do |format|
      if @blockedsite.update(blockedsite_params)
        format.html { redirect_to blockedsite_url(@blockedsite), notice: "Blockedsite was successfully updated." }
        format.json { render :show, status: :ok, location: @blockedsite }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @blockedsite.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blockedsites/1 or /blockedsites/1.json
  def destroy
    @blockedsite.destroy

    respond_to do |format|
      format.html { redirect_to blockedsites_url, notice: "Blockedsite was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def displayDays
    currentTime = DateTime.now.to_time.to_i
    return (@blockedsite.duedate.to_time.to_i-currentTime)/60/60/24
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blockedsite
      @blockedsite = Blockedsite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blockedsite_params
      params.require(:blockedsite).permit(:link, :durationtype, :days, :hours, :minutes, :seconds, :duedate)
    end
end
