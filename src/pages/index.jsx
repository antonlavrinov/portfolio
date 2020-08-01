import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Offer from '../components/Offer';
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Offer/>
    <AboutMe/>
    <Portfolio/>
    <Skills/>
    <Contacts/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
