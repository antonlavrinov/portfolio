import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Offer from '../components/Offer';
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

const IndexPage = () => (
  <Layout>
    <SEO/>
    <Offer/>
    <Portfolio/>
    <Skills/>
  </Layout>
)

export default IndexPage
