import React from "react";
import Img from "gatsby-image";

const Splash = ({ image }) => (
  <Img className="h-half-screen shadow-inner" fluid={image} />
);

export default Splash;
