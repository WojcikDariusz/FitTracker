import React, { Component } from 'react';

import '../index.css';

class Header extends Component {

  constructor() {
    super() 
      this.state = {
        nameOfTracker : "FitTracker",
        clicked : true,
        textColor : "black",
        backgroundColor : "white",
        fontFamily : "lobster",
        fontSize : 20
    }
  }

// handleClick = () => {

//   if(this.state.clicked === true) {
//     this.setState({
//       nameOfTracker : "FitTracker",
//       textColor : "white",
//       backgroundColor : "white",
    
//     })
//   }
// };


    render() {

      let headerCss = {

        color : this.state.textColor,
        backgroundColor : this.state.backgroundColor,
        fontFamily : this.state.fontFamily,
        fontSize : this.state.fontSize
      }
      

        return (
        <div className='header' style={headerCss}>
            <h2>{this.state.nameOfTracker}</h2>
            <ul className="nav navbar-nav navbar-right">
             <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
              </li>
            </ul>
        </div>
        )
    };
};
export default Header;