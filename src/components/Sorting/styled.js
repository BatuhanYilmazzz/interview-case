import styled from 'styled-components';

export const StyledSorting = styled.div`
  padding: ${(props) => props.theme.gutters.regular};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: ${(props) => props.theme.gutters.regular};
  .MuiFormControlLabel-label {
    font-size: ${(props) => props.theme.fontSizes.regular};
    font-family: ${(props) => props.theme.fontFamily.main};
  }
`;
