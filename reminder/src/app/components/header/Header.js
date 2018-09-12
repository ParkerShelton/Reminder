import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
  }


  showMenu(event) {
    event.preventDefault();

    if(this.state.showMenu === false) {
      this.setState({showMenu: true});
    }
    if(this.state.showMenu === true) {
      this.setState({showMenu: false});
    }
    
  }

  render() {

    

    return (
      <div className="Header">



                <div className="menu">
                  <button className="menuBtn" onClick={this.showMenu}> Menu </button>

                  {this.state.showMenu
                    ? (
                        <div className="menuBottom">
                          <button className="menuBtn"> Calendar </button>
                          <button className="menuBtn"> Add </button>
                          <button className="menuBtn"> Remove </button>
                          <button className="menuBtn"> Move </button>
                        </div>
                      )
                      : (
                        null
                      )
                  }                  
                </div>


        

      </div>
    );
  }
}

export default Header;
