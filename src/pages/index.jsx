import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Offer from '../components/Offer';
import Portfolio from "../components/Portfolio";

const IndexPage = () => (
  <Layout>
    <SEO/>
    <Offer/>
    <Portfolio/>
  </Layout>
)

export default IndexPage
