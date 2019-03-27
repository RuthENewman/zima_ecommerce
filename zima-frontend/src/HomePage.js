import React, {Component} from 'react';
import Style from './Style.css';
import Sidebar from './Sidebar';

class HomePage extends Component {
  constructor() {
    super()

    this.state = {
      sideBarStatus: true
    }
  }

  render() {
    return(

      <div id="home-page-div">
          {
            this.props.sideBar == true
            ?  <Sidebar closeSideBar={this.props.closeSideBar} sideBar={this.props.sideBar} />
            : null
          }
        <div className="bg-image" id="img1">
        </div>
        <div className="bg-image" id="img2">
        </div>
        <div className="bg-image" id="img3">
        </div>
        <div className="bg-image" id="img4">
        </div>
        <div className="bg-text">
        <span onClick={() => this.props.toggleShowingSideBar()}>ZIMA (ЗИМА)
        </span>
        </div>
      </div>
    )
  }
}


export default HomePage;
