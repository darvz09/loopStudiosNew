import styled from "styled-components";
import { Link } from 'react-router-dom';
import { theme, TheFOnt } from "../../components/GlobalStyle"

export const FooterContainer = styled.div`
    background: ${theme.fontColour1};
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WrapRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const ColItem = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 3em;
`;
export const SocialLogo = styled.div`
    color: ${theme.fontColour};
    font-family: ${theme.font};
    font-size: 2.5em;
`;
export const FooterMEnu = styled.div`
    display: flex;
    align-items: center;


    
    
`;
export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 400;
  border-bottom: 2px solid transparent;


@media screen and (max-width: 760px){
    width: 100%;

    &:hover{
        border: none;                                                                                                                             
    }
}


`;



export const FooterLinks = styled(Link)`
    color:${theme.fontColour};
    font-family: ${TheFOnt.font};
    text-decoration: none;
    list-style: none;
    font-size: 0.9rem;
    font-weight: 700;
    padding-right: 2em;
    height:100%;

    &:hover {
    color: #fad400;
  }
`;
export const ColItem2 = styled.div`
        width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 3em;
    align-items: flex-end;
    `;
export const SocialIcon = styled.div`
    display: flex;
    align-items: center;`;
export const SocialIconLinks = styled(Link)`
    color:${theme.fontColour};
    font-family: ${TheFOnt.font};
    font-weight: 700;
    font-size: 1.7em;
    padding-left: 1.2em;


    &:hover {
    color: #fad400;
  }
`;

export const WebsiteRights = styled.div`
    color:${theme.fontColour};
    font-size: 0.9rem;
    font-weight: 700;
`;


