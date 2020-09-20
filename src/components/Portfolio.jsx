import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container } from './style';
import LinkOut from '../assets/svgs/link-out.svg';


const PortfolioSection = styled.section`
    // background: white;
    padding: 70px 0;
`
const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
`

const PortfolioItemWrapper = styled(props => <BackgroundImage {...props}/>)`
    border-radius: 10px;
    height: 450px;
    width: 100%;
    overflow: hidden;
    transition: transform 0.2s ease;
    position: relative;
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
        <PortfolioSection>
            <Container>
                <PortfolioWrapper>
                    <a href="https://antonlavrinov.github.io/Memory-Game/" target="_blank">
                        <PortfolioItemWrapper style={{backgroundSize: 'cover'}} fluid={memoryGamePreview}>
                            <LinkOut/>
                        </PortfolioItemWrapper>
                    </a>
                    <a href="https://antonlavrinov.github.io/Memory-Game/" target="_blank">
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
            </Container>
            
        </PortfolioSection>
    )
}

export default Portfolio
