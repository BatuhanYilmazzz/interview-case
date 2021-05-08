import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#1EA4CE',
    primaryDark: '$147594',
    secondary: '#191919',
    white: '#fff',
    black: '#000',
    gray: '#C4C4C4',
    borderColor: '#F3F0FE',
    lightGray: '#E5E5E5'
  },
  fontSizes: {
    smaller: '12x',
    small: '13px',
    regular: '14px',
    regularBig: '18px',
    bigger: '20px'
  },
  gutters: {
    smaller: '5px',
    small: '10px',
    smallBig: '16px',
    regular: '20px',
    regularBig: '25px',
    big: '30px',
    large: '40px'
  },
  radius: {
    regular: '12px',
    small: '2px'
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
    h1, h2, h3, h4, h5, h6{
        margin-bottom:0;
    }
  }
`;

export const Container = styled.div`
  max-width: 1230px;
  margin: auto;
`;
