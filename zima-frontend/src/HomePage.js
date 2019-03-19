import React, {Component} from 'react';
import Style from './Style.css';
import Sidebar from './Sidebar';

// const sideNavBar = document.getElementById("sideNavBar");
// const main = document.getElementById("main");

class HomePage extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  openNav() {
    return <Sidebar />
  }


  render() {
    return(
      <div id="home-page-div">
        <div className="bg-image" id="img1">
        </div>
        <div className="bg-image" id="img2">
        </div>
        <div className="bg-image" id="img3">
        </div>
        <div className="bg-image" id="img4">
        </div>
        <div className="bg-text">
        <span onClick={() => this.openNav}>ZIMA (ЗИМА)
        </span>
        </div>
      </div>
    )
  }
}


export default HomePage;
