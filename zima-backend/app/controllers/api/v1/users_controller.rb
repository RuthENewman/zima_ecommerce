class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def signin
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: {first_name: @user.first_name, email: @user.email, token: issue_token(@user.id)}
    else
      render json: {error: 'Email and/or password invalid'}, status: 401
    end
  end

  def validate
    @user = get_current_user
    if @user
      render json: @user
    else
      render json: {error: 'Email and/or password invalid'}, status: 401
    end
  end

  def get_order_history
    @user = get_current_user
    if @user
      render json: @user.orders
    else
      render json: {error: 'Not a valid user'}, status: 401
    end 
  end

end
