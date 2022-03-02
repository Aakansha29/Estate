class UnlikesController < ApplicationController
	 before_action :find_property
  def create
    @property.unlikes.create(user_id: current_user.id)
    redirect_to property_path(@property)
  end
  private
  def find_property
    @property = Property.find(params[:post_id])
  end
end
