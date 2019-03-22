Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'categories/:category_name/products', to: 'products#index_products_by_category'
      get 'products', to: 'products#index'
      get 'categories', to: 'categories#index'
      resources :users, only: [:create, :index]
      post 'signin', to: 'users#signin'
      get 'validate', to: 'users#validate'
      get 'myaccount', to: 'users#get_order_history'
      resources :orders
      resources :order_items
    end
  end
end
