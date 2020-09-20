import React from 'react'
import styled from 'styled-components';
import Brush from '../assets/svgs/brush.svg';
import Code from '../assets/svgs/code.svg';
import Sass from '../assets/svgs/sass.svg';
import Html from '../assets/svgs/html.svg';
import Css from '../assets/svgs/css.svg';
import Js from '../assets/svgs/js.svg';
import ReactLogo from '../assets/svgs/react-icon.svg';
import GatsbyIcon from '../assets/svgs/gatsby.svg';
import Git from '../assets/svgs/git.svg';
import Npm from '../assets/svgs/npm.svg';
import ArrowIcon from '../assets/svgs/offer_arrow.svg';
import { Container} from './style';
import SvgOverlay from '../assets/svgs/svg-overlay.svg';


const SvgOverlayWrapper = styled(props=> <SvgOverlay {...props}/>)`
    width: 100%;
    background: none;
    margin-top: -180px;
    height: 350px;
    svg {
        width: 100%;
        height: 350px;
    }
`



const OfferSection = styled.section`
    background: var(--anton-black);
`
const OfferWrapper = styled.div`

    width: 100%;
    padding: 60px 0 190px;
    // padding: 60px 0 60px;
    display: flex;
    @media(max-width: 768px) {
        flex-direction: column-reverse;
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
`

const Arrow = styled(props => <ArrowIcon {...props}/>)`
    margin: 0 20px;
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
    // color: var(--anton-black);
    letter-spacing: 0.04em;
`

const OfferAbout = styled.div`
    font-size: 18px;
    color: white;
    line-height: 1.5;
    letter-spacing: 0.025em;
    width: 95%;
    // color: var(--anton-black);
`

const OfferIconWrapper = styled.div`
    width: 70px;
    height: 70px;
    background: linear-gradient(142.48deg, #2B2B2B 29.21%, #232323 105.71%), #282828;
    // background: white;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(187, 187, 187, 0.22);
    // box-shadow: none;
    border-radius: 12px;
    svg {
        width: 50px;
        height: 50px;
    }
`

const OfferMainSkills = styled.div`
 display: flex;
 @media(max-width: 768px) {
    width: 100%;
    justify-content: space-between;
}
`
const OfferSkillsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px;
    height: 340px;
    @media(max-width: 768px) {
        height: 300px;
    }

`

const OfferInfoBlock = styled.div`

`

const SkillLogoWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
        transition: transform 0.2s ease;
        :hover {
            transform: scale(1.05);
        }
    }
    span {
        font-size: 16px;
        color: var(--anton-grey);
        color: white;
        opacity: 0.2;
        margin-top: 10px;
        line-height: 1;
        letter-spacing: 0.05em;

    }
    @media(max-width: 1200px) {
        svg {
            width: 8vw;
        }
    }
    @media(max-width: 768px) {
        width: auto;
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
                                    <Brush/>
                                </OfferIconWrapper>
                                <Arrow/>
                                <OfferIconWrapper>
                                    <Code/>
                                </OfferIconWrapper>
                                <OfferWhatIDoText>
                                    Превращаю дизайн в код
                                </OfferWhatIDoText>
                            </OfferWhatIDo>
                            <OfferAbout>
                                Привет! Меня зовут Антон. 
                                Разработкой сайтов занимаюсь уже более 1 года. 
                                Пишу чистый и понятный код, очень щипитильно 
                                отношусь к деталям при верстке готовых макетов. 
                                Ниже можно ознакомиться с моими лучшими работами ↓
                            </OfferAbout>
                        </OfferInfoBlock>
                        <OfferMainSkills>
                            <OfferSkillsColumn>
                                <SkillLogoWrapper>
                                    <Html/>
                                    <span>HTML5</span>
                                </SkillLogoWrapper>
                                <SkillLogoWrapper>
                                    <GatsbyIcon/>
                                    <span>Gatsby</span>
                                </SkillLogoWrapper>
                                <SkillLogoWrapper>
                                    <Npm/>
                                    <span>npm</span>
                                </SkillLogoWrapper>
                            </OfferSkillsColumn>
                            <OfferSkillsColumn>
                                <SkillLogoWrapper>
                                    <ReactLogo/>
                                    <span>React</span>
                                </SkillLogoWrapper>
                                <SkillLogoWrapper>
                                    <Sass/>
                                    <span>SASS</span>
                                </SkillLogoWrapper>

                                
                            </OfferSkillsColumn>
                            <OfferSkillsColumn>
                                <SkillLogoWrapper>
                                    <Js/>
                                    <span>Java Script</span>
                                </SkillLogoWrapper>
                                <SkillLogoWrapper>
                                    <Css/>
                                    <span>CSS3</span>
                                </SkillLogoWrapper>
                                <SkillLogoWrapper>
                                    <Git/>
                                    <span>git</span>
                                </SkillLogoWrapper>
                            </OfferSkillsColumn>
                        </OfferMainSkills>

                    </OfferWrapper>
                    
                </Container>

                
            </OfferSection>
            <SvgOverlayWrapper/>
        
        </>
        
    )
}

export default Offer
