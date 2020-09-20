import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { Container } from './style';

const HeaderSection = styled.header`

`
const HeaderWrapper = styled.div`
  display: flex;
  padding: 3em 0;
`
const HeaderDeveloper = styled.div`
  color: white;
  font-size: 25px;
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
