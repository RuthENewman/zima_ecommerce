Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # resources :categories do
      #   resources :products
      # end
      get 'categories/:category_name/products', to: 'products#index_products_by_category'
      get 'products', to: 'products#index'
      get 'categories', to: 'categories#index'
    end
  end
end