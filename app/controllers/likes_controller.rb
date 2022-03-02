class LikesController < ApplicationController
    before_action :find_like, only: [:destroy]
	before_action :find_property
  def create
    @property.likes.create(user_id: current_user.id)
    redirect_to property_path(@property)
    UserMailer.with(user: current_user,user: @user).post_created.deliver_later
  end

  def destroy
   if !(already_liked?)
    flash[:notice] = "Cannot unlike"
  else
    @like.destroy
  end
  redirect_to property_path(@property)
end
 def find_like
   @like = @property.likes.find(params[:id])
end



  private
  def find_property
    @property = Property.find(params[:property_id])
  end
end
