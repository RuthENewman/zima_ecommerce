class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def signin
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: {error: 'Email and/or password invalid'}, status: 401
    end
  end

  def validate
    @user = User.find_by(email: request.headers['Authorization'])
  end

end
