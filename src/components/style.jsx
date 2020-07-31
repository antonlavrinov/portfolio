import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`




    * {
        font-family: 'Inter', sans-serif;
        --granich-red: rgb(228, 5, 33);
        --granich-black: #2d2d2d;
        --anton-background-color: #1c1c1c;
        --anton-green-gradient: linear-gradient(180deg, rgba(118,233,65,1) 10%, rgba(15,216,80,1) 100%);
        --anton-section-color: linear-gradient(125deg, rgba(53,53,53,1) 0%, rgba(45,45,45,1) 46%);
        --granich-grey: #888989;

        --granich-red-gradient: linear-gradient(167deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 39%, rgba(189,3,27,1) 61%);
        --granich-red-gradient-horizontal: linear-gradient(90deg, rgba(230,25,51,1) 0%, rgba(213,12,34,1) 50%, rgba(189,3,27,1) 100%);
        
        letter-spacing: 0vw;
        font-weight: 400;
    }

    body {
        background: var(--anton-background-color);

    }
    



`


export const Container = styled.div`
    width: 78%;
    // width: 1024px;
    // max-width: 1024px;
    margin: 0 auto;

    // @media(max-width: 991px) {
    //     width: 90%;
    // }

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