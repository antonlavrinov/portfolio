import React from 'react'
import styled from 'styled-components';

import { Container, Button } from './style';

const OfferSection = styled.section`

`
const OfferWrapper = styled.div`
    background: var(--anton-section-color);
    padding: 5vw 6vw 5vw;
    border-radius: 25px;
    color: white;
    box-shadow: 0 0.5vw 3vw rgba(0,0,0,0.3);
    width: 100%;
`
const OfferTitle = styled.h1`
    font-size: 5vw;
    font-family: Merriweather, serif;
    margin-bottom: 4vw;
`

const OfferText = styled.div`
    font-size: 2vw;
    color: inherit;
    margin-bottom: 4vw;
    line-height: 1.5;
    width: 60%;
`


const Offer = () => {
    return (
        <OfferSection>
            <Container>
                <OfferWrapper>
                    <OfferTitle>
                        Front-end / React.js разработчик
                    </OfferTitle>
                    <OfferText>
                        I design and code beautifully simple things, and I love what I do.
                    </OfferText>
                    <Button>Посмотреть работы</Button>
                </OfferWrapper>
            </Container>
            
        </OfferSection>
    )
}

export default Offer
