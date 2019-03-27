import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div id="sideNavBar" className="sidenav">
         <Link className="closebtn category_eng" onClick={() => this.props.closeSideBar()}>X</Link>
         <Link to="/about" className="category_eng">About</Link>
         <Link to="/allproducts" className="category_eng">Browse All</Link>
         <Link to="/allbytheme" className="category_eng">Browse By Theme</Link>
         <Link to="/createaccount" className="category_eng">Create An Account</Link>
         <Link to="/signin" className="category_eng">Log In</Link>
         <Link to="/comingsoon" className="category_eng">По-Русский</Link>
      </div>
    )
  }

}

export default Sidebar;
