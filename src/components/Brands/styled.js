import styled from 'styled-components';

export const StyledBrand = styled.div`
  padding: ${(props) => props.theme.gutters.regular};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: ${(props) => props.theme.gutters.regular};
  .MuiInputBase-input {
    border: 1px solid ${(props) => props.theme.colors.inputBorderColor};
    font-size: ${(props) => props.theme.fontSizes.regular};
  }
  #outlined-basic-label {
    color: ${(props) => props.theme.colors.placeholderColor};
  }
  .MuiOutlinedInput-input {
    padding: ${(props) => props.theme.gutters.smallBig};
  }
`;

export const FormGroupWrapper = styled.div`
  max-height: 140px;
  overflow-y: scroll;
  margin-top: ${(props) => props.theme.gutters.small};
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: ${(props) => props.theme.radius.regular};
  }
  &::-webkit-scrollbar-button {
    background: #fff;
  }
  &::-webkit-scrollbar-track-piece {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.inputBorderColor};
    background-clip: padding-box;
  }
`;
