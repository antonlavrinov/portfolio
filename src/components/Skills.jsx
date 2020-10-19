import React from 'react'
import { Container} from './style';
import styled from 'styled-components';
import HtmlIcon from '../assets/svgs/skills-icons/html.svg';
import CssIcon from '../assets/svgs/skills-icons/css.svg';
import JavaScriptIcon from '../assets/svgs/skills-icons/JavaScript.svg';
import RSvgIcon from '../assets/svgs/skills-icons/react-icon.svg';
import GatsbySvgIcon from '../assets/svgs/skills-icons/Gatsby.svg';
import ReduxSvgIcon from '../assets/svgs/skills-icons/redux.svg';
import SassIcon from '../assets/svgs/skills-icons/sass.svg';
import JQueryIcon from '../assets/svgs/skills-icons/jQuery.svg';
import PhotoshopIcon from '../assets/svgs/skills-icons/photoshop.svg';
import IllustratorSvgIcon from '../assets/svgs/skills-icons/illustrator-icon.svg';
import StyledComponentsIcon from '../assets/svgs/skills-icons/styled-components.svg';
import GitIcon from '../assets/svgs/skills-icons/git.svg';
import FigmaIcon from '../assets/svgs/skills-icons/figma.svg';
import GulpIcon from '../assets/svgs/skills-icons/gulp.svg';
import NpmIcon from '../assets/svgs/skills-icons/npm.svg';
 

const SkillsSection = styled.section`

`

const SkillsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media(max-width: 768px) {
        flex-direction: column;
    }
`

const SkillsSectionTitle = styled.div`
    color: white;
    color: var(--anton-black);
    font-size: 35px;
    margin-bottom: 55px; 
    display: inline-block;
    font-weight: 700;
    border-bottom: 5px solid var(--anton-green);

`

const SkillsMainList = styled.div`
    display: flex;
    @media(max-width: 768px) {
        justify-content: space-between;
    }
    
`

const SkillsItemWrapper = styled.div`
    display: flex;
    align-items: center;
    svg {
        height: 55px;
        width: 55px;
        margin-right: 10px;
    }
    margin-bottom: 25px;
    @media(max-width: 480px) {
        svg {
            height: 40px;
            width: 40px;
            margin-right: 10px;
        }
    }

`

const SkillsText = styled.div`
    color: #181818;
    font-size: 20px;
    letter-spacing: 0.025em;
    @media(max-width: 480px) {
        font-size: 16px;
    }
`

const SkillsAdditionalList = styled.div`
    border: 2px solid rgba(0,0,0,0.15);
    border-radius: 10px;
    padding: 20px 30px;
    min-width: 40%;
    @media(max-width: 1200px) {
        width: 30%;
        min-width: 30%;
    }
    @media(max-width: 991px) {
        width: 35%;
        min-width: 35%;
    }
    @media(max-width: 768px) {
        width: 100%;
        min-width: 100%;
    }
`

const SkillsAdditionalText = styled.div`
    color: #181818;
    font-size: 18px;
    letter-spacing: 0.025em;
    max-width: 70%;
    margin-bottom: 20px;
`

const SkillsColumnOne = styled.div`
    margin-right: 70px;
    @media(max-width: 991px) {
        margin-right: 30px;
    }
`

const SkillsColumnTwo = styled.div`
    
`

const Skills = () => {
    return (
        <SkillsSection>
            <Container>
                <SkillsSectionTitle>Мои навыки</SkillsSectionTitle>
                <SkillsWrapper>
                    <SkillsMainList>
                        <SkillsColumnOne>
                            <SkillsItemWrapper>
                                <HtmlIcon/>
                                <SkillsText>HTML5</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <CssIcon/>
                                <SkillsText>CSS3</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <JavaScriptIcon/>
                                <SkillsText>JavaScript (ES6)</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <RSvgIcon/>
                                <SkillsText>React</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <GatsbySvgIcon/>
                                <SkillsText>Gatsby</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <ReduxSvgIcon/>
                                <SkillsText>Redux</SkillsText>
                            </SkillsItemWrapper>
                        </SkillsColumnOne>
                        <SkillsColumnTwo>
                        <SkillsItemWrapper>
                                <JQueryIcon/>
                                <SkillsText>jQuery</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <SassIcon/>
                                <SkillsText>Sass / Scss</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <StyledComponentsIcon/>
                                <SkillsText>styled components</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <GulpIcon/>
                                <SkillsText>Gulp</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <GitIcon/>
                                <SkillsText>git</SkillsText>
                            </SkillsItemWrapper>
                            <SkillsItemWrapper>
                                <NpmIcon/>
                                <SkillsText>npm</SkillsText>
                            </SkillsItemWrapper>
                            
                        </SkillsColumnTwo>
                        
                    </SkillsMainList>
                    <SkillsAdditionalList>
                        <SkillsAdditionalText>Также владею графическими редакторами:</SkillsAdditionalText>
                        <SkillsItemWrapper>
                            <PhotoshopIcon/>
                            <SkillsText>Photoshop</SkillsText>
                        </SkillsItemWrapper>
                        <SkillsItemWrapper>
                            <IllustratorSvgIcon/>
                            <SkillsText>Illustrator</SkillsText>
                        </SkillsItemWrapper>
                        <SkillsItemWrapper>
                            <FigmaIcon/>
                            <SkillsText>Figma</SkillsText>
                        </SkillsItemWrapper>
                    </SkillsAdditionalList>
                </SkillsWrapper>
            </Container>
        </SkillsSection>
    )
}

export default Skills
