import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Menu from "../components/Menu";

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Menu />
  </Layout>
);

export default IndexPage;
