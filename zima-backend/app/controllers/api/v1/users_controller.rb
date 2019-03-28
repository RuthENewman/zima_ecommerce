class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  def index
    @users = User.all
    render json: @users
  end

  def new
    @user = User.new
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: {error: 'Unable to create user'}, status: 400
    end
  end

  def edit
    render json: @user
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
  end

  def signin
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: {first_name: @user.first_name, email: @user.email, token: issue_token({id: @user.id})}
    else
      render json: {error: 'Email and/or password invalid'}, status: 401
    end
  end

  def validate
    @user = get_current_user
    if @user
      render json: { id: @user.id, first_name: @user.first_name, last_name: @user.last_name, email: @user.email, token: issue_token({id: @user.id})  }
    else
      render json: {error: 'Email and/or password invalid'}, status: 401
    end
  end

  def get_order_history
    @user = get_current_user
    if @user
      render json: @user.orders, each_serializer: OrderSerializer
    else
      render json: {error: 'Not a valid user'}, status: 401
    end
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
