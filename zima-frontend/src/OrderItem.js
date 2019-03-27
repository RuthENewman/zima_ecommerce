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
        <p className="category_eng"><span>{this.props.product.name}</span><span>{this.props.product.price}</span></p>
        <img className="order-history-image" src={this.props.product.image_url} alt={this.props.product.name}/>
      </div>
    )
  }

}

export default OrderItem;
