import React, { Component, Fragment } from 'react';
import ProductsContainer from './ProductsContainer';

class BrowseAll extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <Fragment>
        <ProductsContainer
          addToCart={this.props.addToCart}
          products={this.props.products}
          productsInCart={this.props.productsInCart}
         />
      </Fragment>
    )
  }


}

export default BrowseAll;
