import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BrowseAll from './BrowseAll';

class Cart extends Component {
  constructor() {
    super()

    this.state = {
      cartStatus: "empty",
    }

  }

  totalPrice = () => {
    let totalPriceOfCart = 0;
    this.props.productsInCart.map(
      product => totalPriceOfCart += parseFloat(product.price)
    )
    return parseFloat(totalPriceOfCart.toFixed(2));
  }

  componentDidMount() {
    this.props.productsInCart.length >= 1
      ? this.setState({
        cartSize: this.props.productsInCart.length,
      })
    : this.setState({
      cartSize: 0,
    })
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
          ? <button className="category_eng cart_button">Go to checkout</button>
          : <button className="category_eng cart_button"><Link to="/allproducts" component={BrowseAll}>View products</Link></button>
        }

      </div>
    </div>
    )
  }

}

export default Cart;
