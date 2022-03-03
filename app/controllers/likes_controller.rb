class LikesController < ApplicationController
    before_action :find_like, only: [:destroy]
	before_action :find_property
  def create
    @property.likes.create(user_id: current_user.id)
    UserMailer.with(user: current_user, property: @property).post_created.deliver_now
    redirect_to property_path(@property)
  end

  def destroy
     if !(already_liked?)
      flash[:notice] = "Cannot unlike"
    else
      @like.destroy
    end
    redirect_to property_path(@property)
  end
 



  private

  def find_like
   @like = @property.likes.find(params[:id])
  end

  def find_property
    @property = Property.find(params[:property_id])
  end
end
