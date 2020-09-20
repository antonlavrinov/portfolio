import React, {useState} from 'react'
import styled from 'styled-components';
import SvgFooterOverlay from '../assets/svgs/svg-footer-overlay.svg';
import { Container } from './style';
import VkIcon from '../assets/svgs/vk.svg';
import TelegramIcon from '../assets/svgs/telegram.svg';
import GithubIcon from '../assets/svgs/github.svg';
import EmailIcon from '../assets/svgs/email.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 



const Email = styled(props => <EmailIcon {...props}/>)`
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    :hover {
        cursor: pointer;
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9998;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 0.55vw solid transparent;
        border-left: 0.55vw solid transparent;
        border-top: 0.55vw solid var(--granich-black);
        ${props => props.content === 'Скопировано :)' && `
            border-top: 0.55vw solid var(--granich-red);
        `}
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9999;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 15px;
        line-height: 1;
        padding: 0.7vw 1vw;
        min-width: 5vw; 
        text-align: center;
        border-radius: 0.2vw;
        white-space: nowrap;
        background: var(--anton-blue);
        ${props => props.content === 'Скопировано :)' && `
            background: var(--anton-green);
        `}
        

    }

    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
        padding-bottom: 0;
        :hover {
            font-size: 3.8vw;

        }
        &:after {
            font-size: 4.5vw;
            padding: 3vw;
            top: -13vw;
            ${props => props.content === 'Скопировано :)' && `
                background: var(--granich-red);
            `}
        }
        &:before {
            top: -3.2vw;
            border-right: 2vw solid transparent;
            border-left: 2vw solid transparent;
            border-top: 2vw solid var(--granich-black);
            ${props => props.content === 'Скопировано :)' && `
                border-top: 2vw solid var(--granich-red);
            `}
        }

    }
`

const Vk = styled(props => <VkIcon {...props}/>)`
    width: 40px;
`

const Telegram = styled(props => <TelegramIcon {...props}/>)`
    width: 38px;
`
const Github = styled(props => <GithubIcon {...props}/>)`
    width: 36px;
`

const FooterSection = styled.footer`
    background: var(--anton-black);
    padding: 150px 0;
`
const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FooterTitle = styled.div`
    font-size: 35px;
    font-weight: 700;
    display: inline-block;
    color: white;
    text-align: center;
    border-bottom: 5px solid var(--anton-blue);
    margin-bottom: 40px;
`

const FooterMail = styled.div`
    color: white;
    font-size: 16px;
    border-bottom: 1px solid rgba(256,256,256,0.2);
    :hover {
        cursor: pointer;
    }
`

const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    svg {
        margin: 0 10px;
        // :hover {
        //     cursor: pointer;
        // }
    }
`


const SvgFooterOverlayWrapper = styled(props=> <SvgFooterOverlay {...props}/>)`
    width: 100%;
    margin-bottom: -180px;
    position: relative;
    z-index: 1;
    height: 350px;
    min-height: 350px;
    svg {
        width: 100%;
        height: 350px;
        fill: blue;
    }
`

const Footer = () => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')
    console.log(tooltipEmail)
    return (
        <>
            <SvgFooterOverlayWrapper/>
            <FooterSection>
                <Container>
                    <FooterWrapper>
                        <FooterTitle>
                            Связаться со мной
                        </FooterTitle>

                        <FooterSocials>
                            <Vk/>
                            <Telegram/>
                            <Github/>
                            <CopyToClipboard text={'alv.anton-lavrinov@gmail.com'}>
                                <Email content={tooltipEmail} onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано :)')}/>
                            </CopyToClipboard>
                        </FooterSocials>
                        © {new Date().getFullYear()}
                        <FooterMail>
                            anton-dev.ru
                        </FooterMail>
                    </FooterWrapper>
                </Container>
                
            </FooterSection>
        
        </>

    )
}

export default Footer
