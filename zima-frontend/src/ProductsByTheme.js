import React, {Component} from 'react';
import ProductItem from './ProductItem';
const baseURL = "http://localhost:3000/api/v1/categories";


class ProductsByTheme extends Component {
  constructor() {
    super()

    this.state = {
      selectedProducts: [],
      shuffledProducts: []
    }
  }

  fetchProductsByTheme = (category) => {
    fetch(`${baseURL}/${category}/products`)
      .then(response => response.json())
      .then(data => this.setState({
        selectedProducts: data
      }))
      .then(this.shuffleProductsByTheme)
  }

  shuffleProductsByTheme = () => {
    this.setState({
      shuffledProducts: this.props.shuffle(this.state.selectedProducts)
    })
  }

  componentDidMount() {
    this.fetchProductsByTheme(this.props.selectedCategory)
  }

  render() {
    return (
    <div className="product-container">
      <div className="product-list">
      {
        this.state.selectedProducts.map(product => <ProductItem
          key={product.id}
          product={product}
          addToCart={this.props.addToCart}
          productsInCart={this.props.productsInCart}
          />)
      }
      </div>
    </div>
    )
  }


}

export default ProductsByTheme;
