class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user
      render json: @user, status: :accepted
    else
      render json: {error: 'Unable to create user'}
    end
  end

  def edit
    render json: @user
  end

  def update
    @user.update(user_params)
    if @user.save
      @user
  end

  def destroy
    if @user
      @user.destroy
      render json: {message: 'User deleted'}
    else
      render json: {error: 'Could not find user'}
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:user).require(:first_name, :last_name, :email)
  end

end
