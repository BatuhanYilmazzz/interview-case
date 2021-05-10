import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: ${(props) => props.theme.gutters.small};
  padding-bottom: ${(props) => props.theme.gutters.small};
  text-align: center;
`;
export const StyledHeaderWrapper = styled.div`
  position: relative;
`;

export const StyledLogo = styled.img`
  max-width: 140px;
`;

export const StyledHeaderTotalPriceWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -${(props) => props.theme.gutters.regular} 0;
  max-width: 130px;
  width: 100%;
`;

export const StyledHeaderTotalPrice = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -${(props) => props.theme.gutters.regular} 0;
  max-width: 130px;
  width: 100%;
`;
