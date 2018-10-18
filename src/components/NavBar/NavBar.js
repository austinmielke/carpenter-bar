import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import logoSmall from "../../images/logo-small.svg";

export default class NavBar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.navLogoVisible);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navLogoVisible);
  }

  navLogoVisible = () => {
    if (window.scrollY > 0) {
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
      <nav className="w-full fixed pin-t pin-x bg-black z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <AnchorLink offset="175" href="#header">
            <img
              className={`nav-logo w-12 sm:w-16 p-2 ${
                this.state.navLogoVisibility
              }`}
              src={logoSmall}
              alt="Carpenter Bar"
            />
          </AnchorLink>
          <ul className="h-12 list-reset flex items-center justify-center">
            <li>
              <AnchorLink
                offset="175"
                className="nav-link md:text-2xl"
                href="#about"
              >
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset="175" className="nav-link" href="#menu">
                Menu
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset="175"
                className="nav-link md:text-2xl"
                href="#contact"
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
