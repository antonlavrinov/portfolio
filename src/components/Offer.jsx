import React from 'react'
import styled from 'styled-components';
import Brush from '../assets/svgs/brush.svg';
import Code from '../assets/svgs/code.svg';
import ArrowIcon from '../assets/svgs/offer_arrow.svg';
import { Container } from './style';
import SvgOverlay from '../assets/svgs/svg-overlay.svg';
import SvgOverlayMobile from '../assets/svgs/svg-overlay_mobile.svg';
import IconsGroup from '../assets/svgs/offer_icons.svg';

const SvgOverlayWrapper = styled(props => <SvgOverlay {...props} />)`
    width: 100%;
    background: none;
    margin-top: -180px;
    height: 350px;
    display: block;
    svg {
        width: 100%;
        height: 350px;
    }
    @media(max-width: 480px) {
        display: none;
    }
`

const SvgOverlayWrapperMobile = styled(props => <SvgOverlayMobile {...props} />)`
    width: 100%;
    background: none;
    margin-top: -180px;
    height: 350px;
    svg {
        width: 100%;
        height: 350px;
    }
    display: none;
    @media(max-width: 480px) {
        display: block;
    }
`



const OfferSection = styled.section`
    background: var(--anton-black);
`
const OfferWrapper = styled.div`

    width: 100%;
    padding: 60px 0 190px;
    display: flex;
    @media(max-width: 768px) {
        flex-direction: column;
        padding-bottom: 80px;
    }

`
const OfferTitle = styled.h1`
    font-size: 60px;
    color: white;
    font-family: var(--main-font);
    margin-bottom: 50px;
    span {
        font-size: inherit;
        color: inherit;
        font-family: Arial, sans-serif;
        font-weight: bold;
    }
    font-weight: 700;
    @media(max-width: 1200px) {
        font-size: 55px;
    }
    @media(max-width: 991px) {
        font-size: 45px;
    }
    @media(max-width: 768px) {
        font-size: 55px;
    }
    @media(max-width: 480px) {
        font-size: 12vw;
        span {
            display: none;
        }
    }
`



const Arrow = styled(props => <ArrowIcon {...props} />)`
    margin: 0 20px;
    @media(max-width: 480px) {
        margin: 0 4vw;
    }
`

const OfferWhatIDo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`

const OfferWhatIDoText = styled.div`
    color: white;
    font-size: 18px;
    width: 173px;
    margin-left: 25px;
    letter-spacing: 0.04em;
    @media(max-width: 480px) {
        font-size: 4vw;
        margin-left: 5vw;
    }
`

const OfferAbout = styled.div`
    font-size: 18px;
    color: white;
    line-height: 1.5;
    letter-spacing: 0.025em;
    width: 100%;
    @media(max-width: 480px) {
        font-size: 4vw;
    }
`

const OfferIconWrapper = styled.div`
    width: 70px;
    height: 70px;
    background: linear-gradient(142.48deg, #2B2B2B 29.21%, #232323 105.71%), #282828;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(187, 187, 187, 0.22);
    svg {
        width: 50px;
        height: 50px;
    }
    @media(max-width: 480px) {
        width: 12vw;
        height: 12vw;
        min-width: 12vw;
        min-height: 12vw;
        border-radius: 1.5vw;
        svg {
            width: 8vw;
            height: 8vw;
        }
    }
`

const OfferMainSkills = styled.div`
    svg {
        width: 550px;
        margin-right: -70px;
        margin-top: -80px;
    }
    @media(max-width: 1200px) {
        svg {
            width: 450px;
            margin-right: -70px;
            margin-top: -60px;
        }
    }
    @media(max-width: 991px) {
        svg {
            width: 380px;
            margin-right: 0;
            margin-top: -60px;
        }
    }
    @media(max-width: 768px) {
        svg {
            width: 100%;
            margin-right: 0;
            margin-top: 0;
        }
    }

`


const OfferInfoBlock = styled.div`
    @media(max-width: 768px) {
        margin-bottom: 30px;
    }
`





const Offer = () => {
    return (
        <>
            <OfferSection>
                <Container>
                    <OfferWrapper>
                        <OfferInfoBlock>
                            <OfferTitle>
                                Front-end <span>/</span> React.js разработчик
                            </OfferTitle>
                            <OfferWhatIDo>
                                <OfferIconWrapper>
                                    <Brush />
                                </OfferIconWrapper>
                                <Arrow />
                                <OfferIconWrapper>
                                    <Code />
                                </OfferIconWrapper>
                                <OfferWhatIDoText>
                                    Превращаю <br />дизайн в код
                                </OfferWhatIDoText>
                            </OfferWhatIDo>
                            <OfferAbout>
                                Привет! Меня зовут Антон.
                                Разработкой приложений и сайтов занимаюсь уже более 2 лет.
                                Пишу чистый и понятный код, очень щепетильно
                                отношусь к деталям при верстке готовых макетов.
                                Ниже можно ознакомиться с моими лучшими работами ↓
                            </OfferAbout>
                        </OfferInfoBlock>
                        <OfferMainSkills>
                            <IconsGroup />
                        </OfferMainSkills>

                    </OfferWrapper>

                </Container>


            </OfferSection>
            <SvgOverlayWrapper />
            <SvgOverlayWrapperMobile />


        </>

    )
}

export default Offer
