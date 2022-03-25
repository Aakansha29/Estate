class BuyersController < ApplicationController
	def index
		@properties = Property.all
	end
	
	def new
	end

	def search
	    if params[:search].blank?
	      redirect_to(buyers_new_path, alert: "Enter Valid Name!") and return
	    else
	       keyword = params[:search]
	       @properties = Property.where(["title LIKE ?", "%#{keyword}%" ])
	    end
	end

	def filter
		if params[:search].blank?
	      redirect_to(properties_path, alert: "Enter Valid Name!") and return
	    else
	       keyword = params[:search]
	       @properties = Property.where(["title LIKE ?", "%#{keyword}%" ])
	  end
	end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_buyer
      @buyer = Buyer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def buyer_params
      params.require(:buyer).permit(:title, :_type, :location, :name, :rate, :area, :avatar, :search)
    end
end