class StoreController < ApplicationController
	def index
		@store= Store.all
	end

	def new
		@store= Store.new
	end
end
