import React, { Component } from 'react';
import Cart from './Cart';

class CompleteOrder extends Component {
 constructor() {
   super()
   this.state = {
     orderStatus: 'not complete',
   }
 }

 handleSubmit = (order) => {
   return fetch('http://localhost:3000/api/v1/orders', {
     method: 'POST',
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(order)
   }).then(response => response.json())
 }

  render() {
    return(
    <div>
      <Cart
      productsInCart={this.props.productsInCart}
      removeFromCart={this.props.removeFromCart}
      />
        <div className="row">
          <div className="col-75">
          <div className="checkout_container">
            <form id="payment_form" onChange={this.handleSubmit}>

              <div className="row">
                <div className="col-50">
                  <h3 className="category_eng">Billing Address</h3>
                  <label for="fname">Full Name</label>
                  <input type="text" className="category_eng" id="fname" name="firstname" placeholder="Your name"></input>
                  <label for="email">Email</label>
                  <input type="text" id="email" className="category_eng" name="email" placeholder="Your email"></input>
                  <label for="adr"><i className="fa fa-address-card-o category_eng"></i> Address</label>
                  <input type="text" id="adr" className="category_eng" name="address" placeholder="Your address"></input>
                  <label for="city"><i className="fa fa-institution category_eng"></i> City</label>
                  <input type="text" id="city" className="category_eng" name="city" placeholder="e.g. Moscow"></input>

                  <div className="row">
                    <div className="col-50 category_eng">
                      <label for="country">Country</label>
                      <input type="text" id="country" name="country" placeholder="e.g. Russia"></input>
                    </div>

                    <div className="col-50">
                      <label for="zip">Zip or Post code</label>
                      <input type="text" id="post_code" name="post_code" placeholder="Your Post or Zip code"></input>
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname" className="category_eng">Accepted Cards</label>
                  <div className="checkout-icon-container">
                    <i id="visa-logo" className="fab fa-cc-visa"></i>
                    <i id="amex-logo" className="fab fa-cc-amex"></i>
                    <i id="mastercard-logo" className="fab fa-cc-mastercard"></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="The name on the card"></input>
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="e.g. September"></input>

                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Year of Expiration</label>
                      <input type="text" id="expyear" name="expyear" placeholder="e.g. 2019"></input>
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="e.g. 111"></input>
                    </div>
                  </div>
                </div>

              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr"></input> Shipping address same as billing
              </label>
              <input className="category_eng btn" type="submit" value="Complete order"></input>
            </form>
          </div>
          </div>
        </div>
      </div>
    )
  }

}

export default CompleteOrder;
