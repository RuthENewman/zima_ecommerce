class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :destroy, :edit, :update]

  def index
    @products = Product.all
    render json: @products
  end

  def index_products_by_category
    @category = Category.find_by(name: params[:category_name])
    @products = @category.products
    render json: @products
  end

  def show
    render json: @product
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.create(product_params)
    if @product
      render json: @product
    else
      render json: {error: 'Unable to create product'}
    end
  end

  def edit
    render json: @product
  end

  def update
    @product.update(product_params)
    if @product.save
      render json: @product, status: :accepted
    else
      render json: { errors: @product.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
    if @product
      @product.destroy
      render json: {message: 'Product deleted.'}
    else
      render json: {error: 'Product not found.'}
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :description, :price, :image_url)
  end

end
