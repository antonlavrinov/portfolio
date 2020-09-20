import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`




    * {
        font-family: Gilroy, sans-serif;
        --anton-black: #181818;
        --anton-grey: #282828;
        --anton-green: #00C281;
        --anton-blue: #0089FF;
        --anton-background-color: #1c1c1c;
        --anton-green-gradient: linear-gradient(180deg, rgba(118,233,65,1) 10%, rgba(15,216,80,1) 100%);
        --anton-section-color: linear-gradient(125deg, rgba(53,53,53,1) 0%, rgba(45,45,45,1) 46%);
        --granich-grey: #888989;
        --main-font: Gilroy, sans-serif;

        --granich-red-gradient: linear-gradient(167deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 39%, rgba(189,3,27,1) 61%);
        --granich-red-gradient-horizontal: linear-gradient(90deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 50%, rgba(189,3,27,1) 100%);
        
        letter-spacing: 0em;
        font-weight: 500;
        color: white;
    }

    body {
        background: var(--anton-black);
        background: white;


    }
    



`


export const Container = styled.div`
    width: 1080px;
    margin: 0 auto;

    @media(max-width: 1200px) {
        width: 900px;
    }

    @media(max-width: 991px) {
        width: 750px;
    }
    @media(max-width: 768px) {
        width: 520px;
    }
    @media(max-width: 575px) {
        width: 90vw;
    }

`

export const Button = styled.button`
    background: var(--anton-green-gradient);
    padding: 1.5vw 2vw;
    border-radius: 0.8vw;
    color: white;
    box-shadow: 0 1.5vw 2vw rgba(0,0,0,0.2);
    transition: all 0.2s ease;
    font-size: 1.6vw;
    :hover {
        cursor: pointer;
        transform: translateY(7%);
        box-shadow: 0 0 2vw rgba(0,0,0,0.1);
    }
`