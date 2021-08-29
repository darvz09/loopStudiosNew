import styled from "styled-components";
import BgImg from '../../imgz/image-hero.jpg';
import { theme, TheFOnt } from "../../components/GlobalStyle";




export const HeroContainer = styled.div`
    margin-top:-120px;
    background: url(${BgImg});
    min-width: 100%;
    min-height: 100vh;
    max-width: 100%;
    max-height: 100vh;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content:center;
    align-items: center;



`;

export const TextWrap = styled.div`

    width: 100%;
    max-width: 690px;
    max-height: 460px;
    display: flex;
    align-items: center;
    border: solid 3px ${theme.fontColour};

    
    p{
        font-size: clamp(2rem, 10vw, 4.8rem);
        color:${theme.fontColour};
        font-family: ${TheFOnt.font2};
        letter-spacing: 2px;
        padding: 1.8rem;
        
        
    }
`;