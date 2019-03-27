import React, { Component } from 'react';
import OrderItem from './OrderItem';

class Order extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return (
      <div className="order-details">
        <h3>Order</h3>
        <ul>
        { (this.props.order.products.length > 0)
          ? this.props.order.products.map(product =>
            <OrderItem key={product.id} order={this.props.order} product={product}/>)
          : <br/>
        }
        </ul>
      </div>
    )
  }

}

export default Order;
