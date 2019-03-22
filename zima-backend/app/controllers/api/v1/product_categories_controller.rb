class Api::V1::ProductCategoriesController < ApplicationController
before_action :set_product_categories, only: [:show, :destroy, :edit, :update]

  def index
    @product_categories = ProductCategory.all
  end

  def show
    render json: @product_category
  end

  def new
    @product_category = ProductCategory.new
  end

  def create
    @product = Product.find(params[:product_category][:product_id])
    @category = Product.find(params[:product_category][:category_id])
    @product_category = ProductCategory.create!(product_category_params)
    if @product_category.valid?
      render json: @product_category
    else
      render json: {error: 'Unable to create product category.'}
    end

  end

  def edit
    render json: @product_category
  end

  def update
    @product_category.update
      if @product_category.save
        render json: @product_category, status: :accepted
      else
        render json: {error: @product_category.errors.full_messages }, status: :unprocessible_entity
      end
  end

  def destroy
    if @product_category
      @product_category.destroy
      render json: {message: 'Product category deleted.'}
    else
      render json: {error: 'Product category not found.'}
    end
  end

  private

  def set_product_category
    @product_category = ProductCategory.find(params[:id])
  end

  def product_category_params
    params.require(:product_category).permit(:category_id, :product_id)
  end

end
