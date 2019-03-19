class Api::V1::OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]

  def index
    @orders = Order.all
    render json: @orders
  end

  def show
    render json: @order
  end

  def new
    @order = Order.new
  end

  def create
    @user = User.find(params[:order][:user_id])
    @order = @user.order.create!(order_params)
    if @order.valid?
      render json: @order
    else
      render json: {error: 'Unable to create order.'}
    end
  end

  def edit
    render json: @order
  end

  def update
    @order.update(order_params)
      if @order.save
        render json: @order, status: :accepted
      else
        render json: {errors: @order.errors.full_messages }, status: :unprocessible_entity
      end
  end

  def destroy
    if @order
      @order.destroy
      render json: {message: 'Order deleted'}
    else
      render json: {error: 'Unable to find order'}
    end
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:user_id)
  end

end
