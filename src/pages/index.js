import React from "react";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Menu />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
