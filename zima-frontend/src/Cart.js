import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Cart extends Component {
  constructor() {
    super()

    this.state = {
      shoppingCartProducts: [],
      cartProductQuantities: [],
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

    initializeQuantity = () => {
      this.setState({
        cartProductQuantities: this.state.shoppingCartProducts.forEach(product => {
          this.state.cartProductQuantities.push(product, product.quantity = 1)
        })
      })
    }

    incrementQuantity = (selectedProduct) => {
      this.setState({
        cartProductQuantities: this.state.shoppingCartProducts.forEach(product =>
        product
        )
      })
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }

  componentDidMount() {
    this.setProductsInCart()
    this.setCartSize()
    this.initializeQuantity()
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
          (<div key={product.id}>
            <h3 className="category_eng">{product.name} <span className="price">£{product.price}</span>
            <br/>
            <label id="quantityLabel" className="category_eng">Quantity:</label>
            <input id="quantityInput" type="number" name={product.name} min="1" value={1} onChange={() => this.incrementQuantity(product)}></input>
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
          ><Link to="/completeorder">Go to checkout</Link></button>
          : <button className="category_eng cart_button"><Link to="/allproducts">View products</Link></button>
        }

      </div>
    </div>
    )
  }

}

export default Cart;
