import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from 'styled-components';

import { Container } from './style';

const HeaderSection = styled.header`

`
const HeaderWrapper = styled.div`
  display: flex;
  padding: 2em 0;
  align-items: end;
`
const HeaderDeveloper = styled.div`
  margin-right: 4em;
  font-size: 22px;
  color: green;
  // padding-bottom: 5px;
  span {
    color: white;
    font-size: 22px;
    :hover {
      cursor: pointer;
    }
  }

`

const NavLinks = styled.nav`
  color: white;
  margin-top: 2.5px;
  ul {
    display: flex;
    color: inherit;
    li {
      color: white;
      margin-right: 2em;
      font-size: 18px;
    }
  }
`
const NavLink = styled.a`

  color: inherit;
  font-size: inherit;
  padding-bottom: 5px;
  line-height: 0.5;
  :hover {
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    border-bottom: 2px solid green;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderSection>
    <Container>
      <HeaderWrapper>
        <HeaderDeveloper>
          {"<"} <span>Антон Лавринов</span> {"/>"}
        </HeaderDeveloper>
        <NavLinks>
          <ul>
            <li>
              <NavLink>Портфолио</NavLink>
            </li>
            <li>
              <NavLink>Обо мне</NavLink>
            </li>
            <li>
              <NavLink>Навыки</NavLink>
            </li>
            <li>
              <NavLink>Контакты</NavLink>
            </li>
          </ul>
        </NavLinks>
      </HeaderWrapper>
    </Container>
  </HeaderSection>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
