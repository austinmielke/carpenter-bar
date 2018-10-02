import React, { Component } from "react";

import logoSmall from "../../images/logo-small.svg";

export default class NavBar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.navLogoVisible);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navLogoVisible);
  }

  navLogoVisible = () => {
    if (document.documentElement.scrollTop > 0) {
      this.setState({ navLogoVisibility: "opacity-1" });
    } else {
      this.setState({ navLogoVisibility: "opacity-0" });
    }
  };

  state = {
    navLogoVisibility: "opacity-0",
  };

  render() {
    return (
      <nav className="w-full fixed pin-t bg-black">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <a href="#header">
            <img
              className={`nav-logo w-12 sm:w-16 p-2 ${
                this.state.navLogoVisibility
              }`}
              src={logoSmall}
              alt="Carpenter Bar"
            />
          </a>
          <ul className="h-12 list-reset flex items-center justify-center">
            <li>
              <a className="nav-link md:text-2xl" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link md:text-2xl" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
