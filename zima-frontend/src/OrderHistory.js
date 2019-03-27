import React, {Component} from 'react';
import API from './API';
import Order from './Order';

class OrderHistory extends Component {
  constructor() {
    super()

    this.state = {
      showOrderHistoryDetails: false,
      orders: []
    }
  }

  getOrderHistory() {
    API.getOrderHistory().then(orders => this.setState({
      orders: orders
    }));
  }

  showOrderHistory = () => {
    this.setState({
      showOrderHistoryDetails: true
    })
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
          <button
          id="view-order-history"
          onClick={this.showOrderHistory}
          >View my order history</button>
          {this.state.showOrderHistoryDetails && this.state.orders.length > 0
                ? this.state.orders.map(order => <Order order={order} key={order.id}/>)
                : <p className="category_eng">You haven't ordered anything yet!</p>
              }
      </div>
    )
  }

}

export default OrderHistory;
