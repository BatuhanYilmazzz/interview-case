import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: ${(props) => props.theme.gutters.small};
  padding-bottom: ${(props) => props.theme.gutters.small};
  text-align: center;
`;

export const StyledLogo = styled.img`
  max-width: 140px;
`;
