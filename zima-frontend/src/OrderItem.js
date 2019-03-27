import React, {Component} from 'react';

class OrderItem extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className="order-item-details">
        <p><span>{this.props.product.name}</span><span>{this.props.product.price}</span></p>
        <img src={this.props.product.img_url} alt={this.props.product.name}/>
      </div>
    )
  }

}

export default OrderItem;
