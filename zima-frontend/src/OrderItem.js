import React, {Component} from 'react';

class OrderItem extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>{this.props.orderItem.name}</p>
      </div>
    )
  }

}

export default OrderItem;
