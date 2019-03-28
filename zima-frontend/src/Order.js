import React, { Component } from 'react';
import OrderItem from './OrderItem';

class Order extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  amendDate = (createdDate) => {
    let year = createdDate.slice(0, 4)
    let month = createdDate.slice(5, 7)
    let day = createdDate.slice(8, 10)
    return `${day}/${month}/${year}`;
  }

  render() {
    const { amendDate } = this;
    return (
      <div className="order-details">
        <h3>Date ordered: {amendDate(this.props.order.order_items[0].created_at)}</h3>
        { (this.props.order.products.length > 0)
          ? this.props.order.products.map(product =>
            <OrderItem key={product.id} order={this.props.order} product={product}/>)
          : <br/>

        }

      </div>
    )
  }

}

export default Order;
