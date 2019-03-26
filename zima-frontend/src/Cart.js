import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BrowseAll from './BrowseAll';
import CompleteOrder from './CompleteOrder';

class Cart extends Component {
  constructor() {
    super()

    this.state = {
      shoppingCartProducts: [],
      cartProductsWithQuantities: [],
    }

  }

    setProductsInCart = () => {
      this.setState({
        shoppingCartProducts: this.props.productsInCart
      })
    }

    setCartSize = () => {
      this.props.productsInCart.length >= 1
        ? this.setState({
          cartSize: this.props.productsInCart.length,
        })
      : this.setState({
        cartSize: 0,
      })
    }

    priceTimesQuantity = () => {

    }

    totalPrice = () => {
      let totalPriceOfCart = 0;
      this.props.productsInCart.map(
        product => totalPriceOfCart += parseFloat(product.price)
      )
      return parseFloat(totalPriceOfCart.toFixed(2));
    }

    incrementQuantity = (selectedProduct) => {
      this.setState({
        cartProductsWithQuantities: this.state.shoppingCartProducts.map(product =>
          product.id === selectedProduct.id && product.quantity != null
          ?  product.quantity += 1
          :  product.quantity = 1
        )
      })
    }

  componentDidMount() {
    this.setProductsInCart()
    this.setCartSize()
  }

  render() {
    return (
    <div className="main_content">
      <div className="shopping-cart checkout_container">
            <h3 id="#shopping-cart-header">My Cart
            <span className="price">
            {
            this.state.cartSize !== 0
                  ? <p>{this.state.cartSize}</p>
                  : <p>0</p> }
            </span></h3>
        {
          this.state.cartSize >= 1
            ? this.props.productsInCart.map(
            product =>
          (<div>
            <h3 className="category_eng">{product.name} <span className="price">£{product.price}</span>
            <br/>
            <label id="quantityLabel" className="category_eng">Quantity:</label>
            <input id="quantityInput" type="number" name="quantity" min="1" onClick={() => this.incrementQuantity(product)}></input>
            <button className="category_eng remove_button" onClick={() => this.props.removeFromCart(product)}>Remove from cart</button></h3>
          </div>)
          )
          : <h3 className="category_eng">You have no items in your cart!</h3>
        }
        <hr />
        <h3 id="#shopping-cart-total" className="price">Total: <span className="price">£{this.totalPrice()}</span></h3>{

        }

        {
          this.state.cartSize >= 1
          ? <button
          className="category_eng cart_button"
          ><Link to="/completeorder" component={CompleteOrder}>Go to checkout</Link></button>
          : <button className="category_eng cart_button"><Link to="/allproducts" component={BrowseAll}>View products</Link></button>
        }

      </div>
    </div>
    )
  }

}

export default Cart;
