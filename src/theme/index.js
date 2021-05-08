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
    lightGray: '#E5E5E5',
    textColor: '#697488',
    inputBorderColor: '#E0E0E0',
    placeHolderColor: '#A8A8A8',
    backgroundColor: '#FAFAFA'
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
    large: '40px',
    largest: '50px'
  },
  radius: {
    regular: '12px',
    small: '2px'
  },
  fontFamily: {
    main: '"Open Sans", sans-serif;'
  }
};

export const GlobalStyle = createGlobalStyle`
  html{ 
   overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
     background-color: ${(props) => props.theme.colors.backgroundColor};
    h1, h2, h3, h4, h5, h6{
        margin-bottom:0; 
    }
    .MuiCheckbox-colorPrimary.Mui-checked{
      color:${(props) => props.theme.colors.primary};
     
    }
    .MuiRadio-colorPrimary.Mui-checked{
       color:${(props) => props.theme.colors.primary}
    }
    .MuiCheckbox-root{
       color:${(props) => props.theme.colors.borderColor};
      
    }
    .MuiFormControlLabel-label{
      font-size: ${(props) => props.theme.fontSizes.regular};
      font-family: ${(props) => props.theme.fontFamily.main};
    }
    .MuiFormControlLabel-root{
      margin-bottom:${(props) => props.theme.gutters.smaller};
    }
  }
  
`;

export const Container = styled.div`
  max-width: 1230px;
  margin: auto;
`;

export const Title = styled.div`
  margin-bottom: ${(props) => props.theme.gutters.small};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textColor};
`;
