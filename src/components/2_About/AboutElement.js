import styled from "styled-components";
import { theme, TheFOnt } from "../../components/GlobalStyle";


export const AboutContainer = styled.div`
    min-width: 100%;
    min-height: 80vh;
    max-width: 100%;
    max-height: 80vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items:center;
    @media screen and (max-width: 960px) {
    min-width: 100%;
    min-height: 100vh;
    max-width: 100%;
    max-height: 100vh;

        }



`;

export const Row = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;


    @media screen and (max-width: 960px) {
            width: 100%;
            height: auto;
            flex-direction: column;
            justify-content: center;

        }

     

`;

export const ImgSec = styled.div`
    max-height: 450px;
    max-width: 800px;

    @media screen and (max-width: 960px) {
            width: 100%;
            height: auto;

        }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 60px) {
            height: auto;
            width: 100%;
            flex-direction: column;
            padding-left: 30px;
            padding-right: 30px;
        }
    
`;

export const Section = styled.div`
    height: 550px;
    width: 350px;
    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 960px) {
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content:center;
            }


 
`;
export const WrapText = styled.div`
    background: ${theme.fontColour};
    height: 300px;
    margin-left: -175px;
    padding-top: 60px;
    padding-left: 30px;
   
        h1{
            font-family: ${TheFOnt.font2};
            color: ${theme.fontColour1};
            font-size: clamp(2.5 10vw 2.8em);
            font-weight:300;
        }
        p{
            font-family: ${TheFOnt.font1};
            color: ${theme.fontColour3};
            font-size: 0.9em;
            line-height: 1.5;
        }

        @media screen and (max-width: 960px ) {
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            text-align: center;


            h1{
                font-size: 2.5rem;

            }
            p{
                font-size:1.2em;
            }
            }
            
   
      

    
`;
