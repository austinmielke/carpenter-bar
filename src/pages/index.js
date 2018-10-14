import React from "react";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Menu />
  </Layout>
);

export default IndexPage;
