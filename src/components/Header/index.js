import React from "react";

import NavBar from "../NavBar";
import logoLarge from "../../images/logo-large.svg";
import arrow from "../../images/arrow.svg";

const Header = () => (
  <header
    id="header"
    className="h-screen w-full bg-black flex flex-col items-center justify-center"
  >
    <NavBar />
    <img className="w-1/2 flex-1" src={logoLarge} alt="Carpenter Bar" />
    <img className="arrow w-8 mb-8" src={arrow} alt="scroll down" />
  </header>
);

export default Header;
