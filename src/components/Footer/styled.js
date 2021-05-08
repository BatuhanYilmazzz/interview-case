import styled from 'styled-components';

export const StyledFooter = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align: center;
  padding-top: ${(props) => props.theme.gutters.big};
  padding-bottom: ${(props) => props.theme.gutters.big};
  background-color: ${(props) => props.theme.colors.lightGray};
  span {
    margin-right: ${(props) => props.theme.gutters.small};
  }
`;
