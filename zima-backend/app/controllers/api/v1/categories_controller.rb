class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update, :destroy]

  def index
    @categories = Category.all
    render json: @categories
  end

  def show
    render json: @category
  end

  def new
    @category = Category.new
  end

  def create
    @category = Category.create(category_params)
    if @category
      render json: @category
    else
      render json: {error: 'Unable to create category.'}
    end
  end

  def edit
    render json: @category
  end

  def update
    @category.update(category_params)
    if @category.save
      render json: @category, status: :accepted
    else
      render json: {errors: @category.errors.full_messages}, status: :unprocessible_entity
    end 
  end

  def destroy
    if @product
      @product.destroy
      render json: {message: 'Category deleted.'}
    else
      render json: {error: 'Category not found'}
    end
  end

  private

  def set_category
    @category = Product.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name, :image_url)
  end

end
