class Api::V1::OrderItemsController < ApplicationController
  before_action :set_order_item, only: [:show, :edit, :update, :destroy]

  def index
    @order_items = OrderItem.all
    render json: @order_items
  end

  def show
    render json: @order_item
  end

  def new
    @order_item = OrderItem.new
  end

  def create
    @order = Order.find(params[:order_item][:order_id])
    @order_item = @order.order_items.create!(order_item_params)
    if @order_item.valid?
      render json: @order_item
    else
      render json: { error: 'Unable to create order item' }
    end
  end

  def edit
    render json: @order_item
  end

  def update
    @order_item.update(order_item_params)
    if @order_item.save
      render json: @order_item, status: :accepted
    else
      render json: { errors: @order_item.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
    if @order_item
      @order_item.destroy
      render json: {message: "Order item deleted"}
    else
      render json: {error: "Unable to find order item"}
    end
  end

  private

  def set_order_item
    @order_item = OrderItem.find(params[:id])
  end

  def order_items_params
    params.require(:order_item).permit(:order_id, :product_id, :quantity, :price)
  end

end
