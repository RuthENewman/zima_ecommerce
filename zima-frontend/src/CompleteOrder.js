import React, { Component } from 'react';
import Cart from './Cart';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import PaymentForm from './PaymentForm';

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
    <StripeProvider apiKey="pk_test_aQk1i0LvsEwnjnl3iG4SbKbZ00Vpway7rg">
      <div>
        <Cart
        productsInCart={this.props.productsInCart}
        removeFromCart={this.props.removeFromCart}
        />
      <div className="CC-payment">
        <Elements>
            <CheckoutForm />
        </Elements>

      </div>
    </div>
    </StripeProvider>
    )
  }

}

export default CompleteOrder;
