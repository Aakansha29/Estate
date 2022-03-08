class SellersController < ApplicationController
	def index
		@properties = Property.all
	end
	def new 
	end
	
	def show
	end

end