import React, { Component } from 'react';
import OrderItem from './OrderItem';

class Order extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  selectOrder = order => {
    this.setState({
      order: order
    })
  }

  componentDidMount() {
    this.selectOrder(this.props.order)
  }

  render() {
    return (
      <div>
        <h3>Order</h3>
        <ul>{
          this.state.order.order_items.map(orderItem =>
          <li>{orderItem.name}</li>)

        }</ul>
      </div>
    )
  }

}

export default Order;
