import React, {Component} from 'react';
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
          { this.state.orders.length > 0
                ? this.state.orders.map(order =>
                  order.products.length > 0
                    ? <Order order={order} key={order.id}/>
                    : null )
                : <p className="category_eng">You haven't ordered anything yet!</p>
            }
      </div>
    )
  }
  }



export default OrderHistory;
