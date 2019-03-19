import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {


  render() {
    return (
      <header className="main_header">
        <div className="header_container">
          <h1 className="name">
            <span className="category_eng">ZIMA </span>
            <span className="category_rus">(ЗИМА) </span>
          </h1>
          <ul className="main_nav">
            <li className="category_eng"><Link to="/">Home</Link></li>
            <li className="category_eng"><Link to="/about">About</Link></li>
            <li className="category_eng"><Link to="/allproducts">Browse All</Link></li>
            <li className="category_eng"><Link to="/allbytheme">Browse By Theme</Link></li>
            <li className="category_eng"><Link to="/shoppingcart">Shopping Cart</Link></li>
            <li className="category_eng"><Link to="/checkout">Checkout</Link></li>
            <li className="category_eng"><Link to="/createaccount">Create an account</Link></li>
            <li className="category_eng"><Link to="/signin">Log in</Link></li>
            <li className="category_eng"><Link to="/myaccount">My Account</Link></li>
            <li className="category_rus"><Link to="/comingsoon">По-Русский</Link></li>
          </ul>
        </div>
      </header>
    )
  }

}

export default Navbar;
