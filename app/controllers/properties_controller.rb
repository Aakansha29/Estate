class PropertiesController < ApplicationController
before_action :set_property, only: [:show, :edit, :update, :destroy]
# load_and_authorize_resource

  # GET /properties or /properties.json
  def index
    @properties = Property.all
  end

  # GET /properties/1 or /properties/1.json
  def show
    # @property = Property.find_by(@property)
    @likes = @property.likes
  end

  # def like
  #   UserMailer.with(user: current_user,user: @user).post_created.deliver_now
  # end

  def search
    if params[:search].blank?
      redirect_to(properties_path, alert: "Enter Valid Name!") and return
    else
       # keyword = params[:search]
       @properties = Property.where(["rate LIKE ?", "%#{params[:search]}%" ])
     end
  end
  # GET /properties/new
  def new
    @property = Property.new
  end

  # GET /properties/1/edit
  def edit
  end

  # POST /properties or /properties.json
  def create
    @property = Property.new(property_params)

    respond_to do |format|
      if @property.save
        # UserMailer.welcome_email(@user).deliver_later
        format.html { redirect_to property_url(@property), notice: "Property was successfully created." }
        format.json { render :show, status: :created, location: @property }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @property.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /properties/1 or /properties/1.json
  def update
    respond_to do |format|
      if @property.update(property_params)
        format.html { redirect_to property_url(@property), notice: "Property was successfully updated." }
        format.json { render :show, status: :ok, location: @property }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @property.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /properties/1 or /properties/1.json
  def destroy
    @property.destroy

    respond_to do |format|
      format.html { redirect_to properties_url, notice: "Property was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
  def set_property
     @property = Property.find(params[:id])
  end

    # Only allow a list of trusted parameters through.
  def property_params
    params.require(:property).permit(:title, :property_type, :location, :rate, :area, :avatar, :description, :search, :user_id)
  end
end

