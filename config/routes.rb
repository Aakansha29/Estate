Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :properties
  resources :buyers
  resources :sellers
  resources :stores
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
  post   '/users/edit'
  get 'buyers/_about' => 'buyers#_about'
  get 'stores/index' => 'stores#index' 

   resources :properties do
     resources :likes
  
end

resources :properties do
  resources :unlikes
end

  devise_scope :user do  
   get '/users/sign_out' => 'devise/sessions#destroy'     
 end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

