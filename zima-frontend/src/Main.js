import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import BrowseAll from './BrowseAll';
import ComingSoon from './ComingSoon';
import CheckoutForm from './CheckoutForm';
import BrowsingByTheme from './BrowsingByTheme';
import Cart from './Cart';
import ProductsByTheme from './ProductsByTheme';

class Main extends Component {


  render() {
    return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/allproducts" component={() => <BrowseAll
        products={this.props.products}
        productsInCart={this.props.productsInCart}
        addToCart={this.props.addToCart}
        />} />
      <Route exact path="/allbytheme"
        component={() => <BrowsingByTheme
        selectCategory={this.props.selectCategory}
        selectedCategory={this.props.selectedCategory}/> }/>
      <Route path="/bytheme/"
        component={() => <ProductsByTheme
          productsInCart={this.props.productsInCart}
          addToCart={this.props.addToCart}
        selectedCategory={this.props.selectedCategory}/>} />
      <Route exact path="/comingsoon" component={ComingSoon} />
      <Route exact path="/checkoutform" component={CheckoutForm} />
      <Route exact path="/shoppingcart" component={() =>
        <Cart
        productsInCart={this.props.productsInCart}
        removeFromCart={this.props.removeFromCart}
        />} />
    </Fragment>
    )
  }


}

export default Main;
