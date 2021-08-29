import styled from "styled-components";
import { theme, TheFOnt } from "../../components/GlobalStyle";


export const EventContainer = styled.div`
    width:100%;
    display: flex;
    align-items:  center;
    justify-content: center;
    padding-bottom: 8em;

    
`;
export const WrapEvents = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;

    @media screen and (max-width: 960px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content:center;
            }


 

`;
export const TitleSec = styled.div`
        font-size: 2.5rem;
        font-weight: 400;
        font-family: ${TheFOnt.font2};
`;


export const EventList = styled.div`
    margin-top: 4.5rem;
    height: 100%;
    width: 100%;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(220px, 4fr));
    grid-column-gap:2.5em;
    grid-row-gap:2.2em;
    align-items:  center;
    text-align: center;



        @media screen and (max-width: 580px) {
        width: 100%;
        grid-template-columns:repeat(1, minmax(180px, 1fr));
        

        }

`;





export const EvCard = styled.div`
    position: relative;
    min-width: 240px;
    min-height: 400px;

 


    @media screen and (max-width: 580px) {
    max-width: 480px ;
    min-height: 100px;
    }

    `;
export const EvImg = styled.img`
     width: 100%;
     height: 100%;
     object-fit: fit;

     @media screen and (max-width: 580px) {
        display: none;
    }
`;
export const EvImg2 = styled.img`
  display: none;
         @media screen and (max-width: 580px) {
             display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: bottom;
     }
`;


export const EvDescp = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    color: ${theme.fontColour};
    font-family: ${TheFOnt.font2};
    font-size: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 45px;

    opacity: 0;
    transition: opacity 0.45s;

    :hover {
        opacity: 1;
    }

    @media screen and (max-width: 580px) {
        align-items:  flex-start;
        padding-bottom: 25px;
        padding-left: 40px;
    

     }
`;


export const MobileButton = styled.div`
    display: none;

    @media screen and (max-width: 580px) {
        display: block;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    

     }
`;
