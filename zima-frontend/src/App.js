import React, { Component } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './Navbar';
import ZimaFooter from './ZimaFooter';
import Sidebar from './Sidebar';
import Main from './Main';
const productsURL = "http://localhost:3000/api/v1/products";

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      productsInCart: [],
      selectedCategory: null,
    }

  }

  fetchProducts() {
    fetch(productsURL)
      .then(response => response.json())
      .then((products) => this.setState({
        products: products,
      }))
  }

  componentDidMount() {
    this.fetchProducts()
  }

  addToCart = product => {
    this.setState({
      productsInCart: [...this.state.productsInCart, product]
    })
    alert('Product added to cart!')
  }

  removeFromCart = product => {
    this.setState({
      productsInCart: this.state.productsInCart.filter(cartProduct => cartProduct.id !== product.id)
    })
  }

  selectCategory = category => {
    this.setState({
      selectedCategory: category,
    })
  }

  deselectCategory = () => {
    this.setState({
      selectedCategory: null,
    })
  }

  render() {
    return (

      <BrowserRouter>
        <Sidebar />
        <Navbar />
          <Main
          products={this.state.products}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          productsInCart={this.state.productsInCart}
          selectCategory={this.selectCategory}
          selectedCategory={this.state.selectedCategory}
          deselectCategory={this.deselectCategory}
          />

        <ZimaFooter />
      </BrowserRouter>
    );
  }
}

export default App;
