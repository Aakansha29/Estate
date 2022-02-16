class SellersController < ApplicationController
	def index
		@properties = Property.all
	end
end