import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import Splash from "../components/Splash/Splash";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
    <Splash image={data.splashOne.childImageSharp.fluid} />
    <About />
    <Splash image={data.splashTwo.childImageSharp.fluid} />
    <Menu menu={data} />
    <Splash image={data.splashThree.childImageSharp.fluid} />
    <Contact />
    <Splash image={data.splashFour.childImageSharp.fluid} />
    <Footer />
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    markdownRemark {
      frontmatter {
        title
        price
        description
      }
    }
    splashOne: file(relativePath: { eq: "splash1.jpg" }) {
      ...fluidImage
    }
    splashTwo: file(relativePath: { eq: "splash2.jpg" }) {
      ...fluidImage
    }
    splashThree: file(relativePath: { eq: "splash3.jpg" }) {
      ...fluidImage
    }
    splashFour: file(relativePath: { eq: "splash4.jpg" }) {
      ...fluidImage
    }
  }
`;
