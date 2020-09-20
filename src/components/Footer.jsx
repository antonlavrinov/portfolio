import React from 'react'
import styled from 'styled-components';

import { Container } from './style';

const FooterSection = styled.section`

`
const FooterWrapper = styled.div`

`

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <FooterWrapper>
                    © {new Date().getFullYear()}
                </FooterWrapper>
            </Container>
            
        </FooterSection>
    )
}

export default Footer
