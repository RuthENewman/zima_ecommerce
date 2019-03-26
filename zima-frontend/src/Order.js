import React, { Component } from 'react';

class Order extends Component {
  constructor() {
    super()

    this.state = {
      order: {}
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
        <h2>Order</h2>
        {
          this.state.order
        }
      </div>
    )
  }

}

export default Order;
