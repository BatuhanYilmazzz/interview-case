import styled from 'styled-components';

export const StyledBasket = styled.div`
  border: 5px solid ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.gutters.smallBig};
  border-radius: ${(props) => props.theme.radius.small};
  position: relative;
  max-height: 350px;
  overflow-y: scroll;
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
export const SyledBasketItem = styled.div`
  padding: ${(props) => props.theme.gutters.small} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.inputBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
`;
export const StyledQuantity = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: ${(props) => props.theme.gutters.small};
  margin-right: ${(props) => props.theme.gutters.small};
  margin-left: ${(props) => props.theme.gutters.small};
`;
export const StyledNoItem = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.regular};
`;

export const StyledTotalPrice = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.regular};
  padding: ${(props) => props.theme.gutters.small};
  display: inline-block;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.small};
  max-width: 92px;
  width: 100%;
  text-align: center;
  margin-top: ${(props) => props.theme.gutters.small};
  z-index: 99;
`;
export const StyledTotalPriceWrapper = styled.div`
  background-color: #fff;
  position: sticky;
  right: 0;
  bottom: -20px;
  width: 100%;
  z-index: 99;
  text-align: right;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding-bottom: ${(props) => props.theme.gutters.small};
`;
