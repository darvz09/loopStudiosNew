import styled from "styled-components";
import { Link } from "react-router-dom";
import {theme, TheFOnt } from '../GlobalStyle'



export const NavBar = styled.nav`
    height: 120px;
    min-width:375px;
    max-width: 100%;
    display: flex;
    justify-content:center;
    align-items: flex-end;
    top: 0;
    z-index: 999;
   



`;
export const NavWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 960px){
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    
`;
export const NavBrand = styled(Link)`
    color: ${theme.fontColour};
    font-family: ${TheFOnt.font1};
    font-size: 2.5rem;
    text-decoration: none;

    

`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        margin-top: -20px;
        display: block;
        font-size: 1.8rem;
        color: ${theme.fontColour};
        transform: translate(-100%, 60%);
        font-size:1.8rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  color:white;

  @media screen and (max-width: 960px) {
    margin-top:-120px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 90vh;
    margin-right:0px;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    

  }
`;

export const Close = styled.li`
  display: none;
@media screen and (max-width: 960px) {
  display: block;
  margin-top: -40px;
  width: 80%;
  height: 2rem;
  display:flex;
  justify-content: flex-end;
  font-size: 2rem;

}
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 400;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fad400;
  }
@media screen and (max-width: 960px){
    width: 100%;

    &:hover{
        border: none;                                                                                                                             
    }
}

`;
export const NavLinks = styled(Link)`
    color:${theme.fontColour};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;

    &:hover {
    color: #fad400;
  }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color:#fad400;
            transition: all 0.3s ease;
        }
    }
`;