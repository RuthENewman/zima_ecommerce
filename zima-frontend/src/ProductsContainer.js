import React, {Component} from 'react';
import ProductsList from './ProductsList';
import Cart from './Cart';


class ProductsContainer extends Component {

  render() {
    return(
      <div className="product-container">
        <h2 id="all-products-heading">All products</h2>
        <ProductsList
          products={this.props.products}
          addToCart={this.props.addToCart}
          productsInCart={this.props.productsInCart}
          />
        <Cart
          productsInCart={this.props.productsInCart}
        />
      </div>
    )

  }

}

export default ProductsContainer;
