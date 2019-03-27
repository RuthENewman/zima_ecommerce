{ this.state.order.order_items.length > 0
? this.state.order.order_items.map(orderItem => {
    <OrderItem orderItem={orderItem} key={orderItem.id}/>
  })
: <p>No items ordered!</p>
}
