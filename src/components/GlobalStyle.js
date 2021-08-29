import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;


    }
    
`;
export const theme = {
  fontColour: 'hsl(0, 0%, 100%)',
  fontColour1: 'hsl(0, 0%, 0%)',
  fontColour2: 'hsl(0, 0%, 55%)',
  fontColour3: ' hsl(0, 0%, 41%)',
}

export const TheFOnt = {
  font1: 'Alata, sans-serif',
  font2: 'Josefin Sans, sans-serif',
  font3: 'Nunito, sans-serif',
  font4: 'Open Sans Condensed, sans-serif',
}

export const Container = styled.div`
  max-width: 1140px;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  padding:0 auto;

  
  @media screen and (max-width: 1200px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content:center;
      padding: 2.5rem;

    }


`;

export const Button = styled.button`
  background: ${theme.fontColour};
  white-space: nowrap;
  letter-spacing: 8px;
  padding: ${({ big }) => (big ? '10px 20px' : '12px 60px')};
  color: #111111;
  font-weight: 400;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: solid 1px ${theme.fontColour1};
  cursor: pointer;
  
  &:hover {
    transition: all 0.3s ease-out;
    Color: #fad400;
    border: solid 1px #fad400;
    
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Button1 = styled.button`
    display: block;
    background: ${theme.fontColour};
  white-space: nowrap;
  letter-spacing: 8px;
  padding: ${({ big }) => (big ? '10px 20px' : '12px 60px')};
  color: #111111;
  font-weight: 400;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: solid 1px ${theme.fontColour1};
  cursor: pointer;
  
  &:hover {
    transition: all 0.3s ease-out;
    Color: #fad400;
    border: solid 1px #fad400;
    
  
  }
`;  