import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems fixed-top shadow-lg">
        <h1 className="Navbar-logo">
          Sloth <i className="fas fa-tree"></i>{" "}
        </h1>
        <div className="Menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : " fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
