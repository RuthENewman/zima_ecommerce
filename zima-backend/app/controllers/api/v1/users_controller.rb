class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def signin
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: {first_name: @user.first_name, id: @user.id }
    else
      render json: {error: 'Email and/or password invalid'}, status: 401
    end
  end


end
