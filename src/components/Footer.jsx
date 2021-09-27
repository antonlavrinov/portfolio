import React, {useState} from 'react'
import styled from 'styled-components';
import SvgFooterOverlay from '../assets/svgs/svg-footer-overlay.svg';
import SvgFooterOverlayMobile from '../assets/svgs/svg-footer-overlay_mobile.svg';
import { Container } from './style';
import VkIcon from '../assets/svgs/vk.svg';
import TelegramIcon from '../assets/svgs/telegram.svg';
import GithubIcon from '../assets/svgs/github.svg';
import EmailIcon from '../assets/svgs/email.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const LinkWrapper = styled.a`
    display: block;
    position: relative;
    :hover {
        cursor: pointer;
        &:before, &:after {
            display: block;
        }
        ${props => !props.content && `
            &:before, &:after {
                display: none;
            }
        `}

    }
    &:before {
        content: '';
        display: none;
        position: absolute;
        z-index: 9998;
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 15px solid transparent;
        border-left: 15px solid transparent;
        border-bottom: 15px solid var(--anton-blue);
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9999;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 15px;
        line-height: 1.5;
        padding: 10px 15px;
        text-align: center;
        border-radius: 5px;
        white-space: nowrap;
        background: var(--anton-blue);

    }    

    @media only screen and (max-width: 575px) {
        :hover {
            &:before, &:after {
                display: none;
            }
        }
        &:after {
            font-size: 20px;
            padding: 15px;
            top: 60px;
        }
        &:before {
            top: 50px;
            border-right: 10px solid transparent;
            border-left: 10px solid transparent;
            border-bottom: 10px solid var(--anton-blue);
        }
    }
`

const EmailWrapper = styled.div`
    position: relative;
    margin-top: -3px;
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
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        //bottom
        border-right: 15px solid transparent;
        border-left: 15px solid transparent;
        border-bottom: 15px solid var(--anton-blue);
        ${props => props.content === 'Скопировано alv.anton.lavrinov@gmail.com' && `
            border-bottom: 15px solid var(--anton-green);
        `}
    }

    &:after {
        content: '${props => props.content}';
        display: none;
        position: absolute;
        z-index: 9999;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 15px;
        line-height: 1;
        padding: 10px 15px;
        min-width: 20px; 
        text-align: center;
        border-radius: 5px;
        background: var(--anton-blue);
        ${props => props.content === 'Скопировано alv.anton.lavrinov@gmail.com' && `
            background: var(--anton-green);
        `}
        

    }

    @media only screen and (max-width: 575px) {

        &:after {
            font-size: 20px;
            padding: 15px;
            top: 60px;
            ${props => props.content === 'Скопировано alv.anton.lavrinov@gmail.com' && `
                background: var(--anton-green);
            `}
        }
        &:before {
            top: 50px;
            border-right: 10px solid transparent;
            border-left: 10px solid transparent;
            border-bottom: 10px solid var(--anton-blue);
            ${props => props.content === 'Скопировано alv.anton.lavrinov@gmail.com' && `
                border-bottom: 10px solid var(--anton-green);
            `}
        }
    }
`


const Email = styled(props => <EmailIcon {...props}/>)`
    width: 40px;
    height: 40px;
    position: relative;
    display: block;

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
    white-space: nowrap;
`

const FooterMail = styled.a`
    color: white;
    font-size: 16px;
    border-bottom: 1px solid rgba(256,256,256,0.2);
    :hover {
        cursor: pointer;
        color: white;
        font-size: 16px;
        border-color: white;
    }
`

const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    svg {
        margin: 0 10px;
    }
`


const SvgFooterOverlayWrapper = styled(props=> <SvgFooterOverlay {...props}/>)`
    width: 100%;
    margin-bottom: -180px;
    position: relative;
    z-index: 1;
    height: 350px;
    min-height: 350px;
    display: block;
    svg {
        width: 100%;
        height: 350px;
        fill: blue;
    }
    @media(max-width: 480px) {
        display: none;
    }
`

const SvgFooterOverlayMobileWrapper = styled(props=> <SvgFooterOverlayMobile {...props}/>)`
    width: 100%;
    margin-bottom: -115px;
    position: relative;
    z-index: 1;
    height: 220px;
    min-height: 220px;
    display: none;
    svg {
        width: 100%;
        height: 220px;
        fill: blue;
    }
    @media(max-width: 480px) {
        display: block;
    }
`

const Footer = () => {
    const [tooltipEmail, setTooltipEmail] = useState('Скопировать')
    return (
        <>
            <SvgFooterOverlayWrapper/>
            <SvgFooterOverlayMobileWrapper/>
            <FooterSection>
                <Container>
                    <FooterWrapper>
                        <FooterTitle>
                            Связаться со мной
                        </FooterTitle>

                        <FooterSocials>
                            <LinkWrapper rel="noopener noreferrer" target="_blank" content="Вконтакте" href="https://vk.com/anton_alv">
                                <Vk/>
                            </LinkWrapper>
                            <LinkWrapper rel="noopener noreferrer" target="_blank" content="Telegram" href="https://t.me/lav_anton">
                                <Telegram/>
                            </LinkWrapper>
                            <LinkWrapper rel="noopener noreferrer" target="_blank" content="GitHub" href="https://github.com/antonlavrinov">
                                <Github/>
                            </LinkWrapper>

                            
                            
                            <EmailWrapper onMouseLeave={() => setTooltipEmail('Скопировать')} onClick={() => setTooltipEmail('Скопировано alv.anton.lavrinov@gmail.com')} content={tooltipEmail}>
                                <CopyToClipboard text={'alv.anton.lavrinov@gmail.com'}>
                                    <Email  />
                                </CopyToClipboard>
                            </EmailWrapper>

                        </FooterSocials>
                        © {new Date().getFullYear()}
                        <FooterMail href="/">
                            https://anton-dev.netlify.app/
                        </FooterMail>
                    </FooterWrapper>
                </Container>
                
            </FooterSection>
        
        </>

    )
}

export default Footer
