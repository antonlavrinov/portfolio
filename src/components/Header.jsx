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
  // color: var(--anton-black);
  font-size: 24px;
  // font-weight: 600;
  :hover {
    cursor: pointer;
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
