import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  closeNav() {
    // document.getElementById("sideNavBar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }

  render() {
    return (
      <div id="sideNavBar" className="sidenav">
         <Link to="javascript:void(0)" className="closebtn" onClick={this.closeNav()}>&times;</Link>
         <Link to="/about" className="category_eng">About</Link>
         <Link to="/products" className="category_eng">Browse All</Link>
         <Link to="/bytheme" className="category_eng">Browse By Theme</Link>
         <Link to="/createaccount" className="category_eng">Create An Account</Link>
         <Link to="/login" className="category_eng">Log In</Link>
         <Link to="/contact" className="category_eng">Contact</Link>
      </div>
    )
  }

}

export default Sidebar;
