class BuyersController < ApplicationController
	def index
		@properties = Property.all
	end
end