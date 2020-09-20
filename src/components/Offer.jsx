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

const OfferSection = styled.section`

`
const OfferWrapper = styled.div`

    width: 100%;
    padding: 60px 0 120px;
    display: flex;
`
const OfferTitle = styled.h1`
    font-size: 60px;
    color: white;
    font-family: var(--main-font);
    margin-bottom: 50px;
    // width: 60%;
    span {
        font-size: inherit;
        color: inherit;
        font-family: Arial, sans-serif;
    }
    font-weight: 700;
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
    font-size: 22px;
    width: 173px;
    margin-left: 25px;
`

const OfferAbout = styled.div`
    font-size: 16px;
    color: white;
    letter-spacing: 0.025em;
    width: 90%;
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
    border-radius: 12px;
    svg {
        width: 50px;
        height: 50px;
    }
`

const OfferMainSkills = styled.div`
 display: flex;
`
const OfferSkillsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px;
    height: 340px;

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
        opacity: 0.25;
        margin-top: 10px;
        white-space: unwrap;
    }

`


const Offer = () => {
    return (
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
    )
}

export default Offer
