import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super() 
      this.state = {
        nameOfTracker : "I AM THE BEST",
        clicked : true,
        textColor : "black",
        backgroundColor : "white"
    }
  }

handleClick = () => {

  if(this.state.clicked === true) {
    this.setState({
      nameOfTracker : "BEST TRACKING APP",
      textColor : "white",
      backgroundColor : "black"
    })
  } else {
    this.setState({
      nameOfTracker: "I AM THE BEST",
      textColor : "black",
      backgroundColor : "white"
    })
  }
  this.setState({
    clicked : !this.state.clicked
  })
};


    render() {

      let headerCss = {

        color : this.state.textColor,
        backgroundColor : this.state.backgroundColor
      
      }
      

        return (
        <div className='header' style={headerCss} onClick={this.handleClick}>
            <center>
             <h2>{this.state.nameOfTracker}</h2>
            </center>
        </div>
        )
    };
};
export default Header;