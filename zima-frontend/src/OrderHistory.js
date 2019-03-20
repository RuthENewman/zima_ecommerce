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
        <h3>My order history: </h3>
        {
          this.state.orders.length === 0
          ? <p>You don't have any orders yet!<Link to="/allproducts">View all products</Link></p>
            : this.state.orders.map(order => (
              <Order key={order.id} order={order} />
            ))
        }
      </div>
    )
  }

}

export default OrderHistory;
