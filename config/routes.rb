Rails.application.routes.draw do
  resources :properties
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
    }
  
  root 'properties#index'
  # root 'buyers#index'

  get '/buyers/index' => 'buyers#index'
  get '/sellers/index' => 'sellers#index'
 #  devise_scope :user do  
 #   get '/users/sign_out' => 'devise/sessions#destroy'     
 # end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
