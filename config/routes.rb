Rails.application.routes.draw do
  resources :properties
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
    }
  get 'properties/index'
  root 'properties#index'

  # root 'buyers#index'
  #get '/search' => 'buyers#Search'
  get '/search' => 'properties#search'
  get '/buyers/index' => 'buyers#index'
  get '/buyers/new'  => 'buyers#new'
  get '/sellers/index' => 'sellers#index'
   get '/sellers/new'  => 'sellers#new'


   resources :properties do
     resources :likes
  
end

resources :properties do
  resources :unlikes
end

 #  devise_scope :user do  
 #   get '/users/sign_out' => 'devise/sessions#destroy'     
 # end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

