import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container } from './style';
import LinkOut from '../assets/svgs/link-out.svg';



const PortfolioSection = styled.section`
    background: white;
    // background: var(--anton-green);
    padding: 20px 0 70px;

`

const PortfolioSectionWrapper = styled.div`
    margin-top: -100px;
`

const PortfolioSectionTitle = styled.div`
    color: white;
    color: var(--anton-black);
    font-size: 35px;
    margin-bottom: 30px; 
    display: inline-block;
    font-weight: 700;
    border-bottom: 5px solid var(--anton-green);
`
const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }

`

const PortfolioItemWrapper = styled(props => <BackgroundImage {...props}/>)`
    border-radius: 10px;
    height: 450px;
    width: 100%;
    overflow: hidden;
    transition: transform 0.2s ease;
    position: relative;
    // box-shadow: 0 0 10px rgba(0,0,0,0.3);
    svg {
        width: 35px;
        height: 35px;
        position: absolute;
        right: 25px;
        top: 25px;
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;

        transition: opacity 0.2s ease;
        transform: translate(-50%, -50%);
    }
    :hover {
        cursor: pointer;
        transform: translateY(-1%);
        div {
            background: var(--anton-green);
        }
        span {
            opacity: 1;
        }
        svg {
            opacity: 1;
        }
    }
    @media(max-width: 1200px) {
        height: 380px;
    }

    @media(max-width: 991px) {
        height: 300px;
    }


    @media(max-width: 768px) {
        height: 430px;
    }
    @media(max-width: 575px) {
        height: 75vw;
    }
`

const PortfolioItemOverlay = styled.div`
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: 0;

`

const PorfolioLinkWrapper = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

    i {
        margin-top: 10px;
        display: block;
        font-style: normal;
        color: white;
        font-size: 22px;
    }
    svg {
        width: 50px;
        height: 50px;
    }
`

const GreenOverlay = styled.div`
    width: 100%;
    background: var(--anton-green);
    height: 100px;
`


const Portfolio = () => {
    const data = useStaticQuery(graphql`
        query portfolioPieces {
            memoryGame: file(relativePath: { eq: "memory-game.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            gentleman: file(relativePath: { eq: "gentleman.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            bookstore: file(relativePath: { eq: "bookstore.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            granich: file(relativePath: { eq: "granich.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }

        }
    `)

    const memoryGamePreview = data.memoryGame.childImageSharp.fluid;
    const gentlemanPreview = data.gentleman.childImageSharp.fluid;
    const bookstorePreview = data.bookstore.childImageSharp.fluid;
    const granichPreview = data.granich.childImageSharp.fluid;
    return (
        <>

            {/* <GreenOverlay/> */}
            <PortfolioSection>
               

                <Container>
                    <PortfolioSectionWrapper>
                    <PortfolioSectionTitle>Портфолио</PortfolioSectionTitle>
                        <PortfolioWrapper>
                            <a href="https://antonlavrinov.github.io/Memory-Game/" target="_blank">
                                <PortfolioItemWrapper style={{backgroundSize: 'cover'}} fluid={memoryGamePreview}>
                                    <LinkOut/>
                                </PortfolioItemWrapper>
                            </a>
                            <a href="https://elated-kalam-d4b493.netlify.app/" target="_blank">
                                <PortfolioItemWrapper style={{backgroundSize: 'cover'}} fluid={granichPreview}>
                                    <LinkOut/>
                                </PortfolioItemWrapper>
                            </a>
                            <a href="https://antonlavrinov.github.io/Memory-Game/" target="_blank">
                                <PortfolioItemWrapper style={{backgroundSize: 'cover'}} fluid={gentlemanPreview}>
                                    <LinkOut/>
                                </PortfolioItemWrapper>
                            </a>
                            <a href="https://antonlavrinov.github.io/bookstore/" target="_blank">
                                <PortfolioItemWrapper style={{backgroundSize: 'cover'}} fluid={bookstorePreview}>
                                    <LinkOut/>
                                </PortfolioItemWrapper>
                            </a>

                        </PortfolioWrapper>
                    </PortfolioSectionWrapper>
                    
                </Container>
                
            </PortfolioSection>
        
        
        </>
        
    )
}

export default Portfolio
