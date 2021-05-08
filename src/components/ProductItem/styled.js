import styled from 'styled-components';

export const StyledProductItem = styled.div``;

export const ProductItemHeader = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  min-width: 92px;
  min-height: 92px;
`;

export const ProductItemHeaderWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: ${(props) => props.theme.gutters.smallBig};
  border-radius: ${(props) => props.theme.gutters.regular};
`;

export const StyledPrice = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.regular};
  margin: ${(props) => props.theme.gutters.small} 0;
`;

export const StyledItemName = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.regular};
  margin: ${(props) => props.theme.gutters.small} 0;
  min-height: 40px;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.smaller};
  border-radius: ${(props) => props.theme.radius.small};
  border: 1px solid ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: ${(props) => props.theme.radius.small};
`;
