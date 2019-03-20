import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import API from './API';
import Order from './Order';

class OrderHistory extends Component {
  constructor() {
    super()

    this.state = {
      orders: []
    }
  }

  getOrderHistory() {
    API.getOrderHistory().then(orders => this.setState({
      orders: orders
    }));
  }

  componentDidMount() {
    const { history, username } = this.props
    if (!username) {
      history.push("/signin");
    } else {
      this.getOrderHistory();
    }
  }

  render() {
    return(
      <div id="order-history" className="user-list">
        <h3 className="category_eng">Hi {this.props.username}!</h3>
        <h3 className="category_eng">Your order history: </h3>
          <ul>
            {
              this.state.orders > 0
              ? this.state.orders.map(order => <li>Your order</li>)
              : <p className="category_eng">You haven't ordered anything yet!</p>
            }
          </ul>
      </div>
    )
  }

}

export default OrderHistory;
