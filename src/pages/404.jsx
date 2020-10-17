import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import { Container } from '../components/style';
import { Link } from "gatsby";

const NotFoundSection = styled.section`

`

const NotFoundWrapper = styled.div`
  height: 400px;
  color: var(--anton-black);
  padding: 50px 0;
  a {
    font-size: 20px;
    border-bottom: 1px solid var(--anton-black);
    :hover {
      border-bottom: none;
    }
  }
`


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Такой страницы не существует" />
    <NotFoundSection>
      <Container>
        <NotFoundWrapper>
          <h1>Такой страницы не существует...</h1>
          <Link to="/">← Вернуться на главную</Link>
        </NotFoundWrapper>
      </Container>
    </NotFoundSection>

  </Layout>
)

export default NotFoundPage
