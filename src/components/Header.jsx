import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { Container } from './style';

const HeaderSection = styled.header`
  background: var(--anton-black);
`
const HeaderWrapper = styled.div`
  display: flex;
  padding: 3em 0;
`
const HeaderDeveloper = styled.div`
  color: white;
  font-size: 24px;
  :hover {
    cursor: pointer;
  }
  @media(max-width: 480px) {
    font-size: 6vw;
  }

`




const Header = () => (
  <HeaderSection>
    <Container>
      <HeaderWrapper>
        <HeaderDeveloper>
          Антон Лавринов
        </HeaderDeveloper>
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
