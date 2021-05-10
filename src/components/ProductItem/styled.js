import styled from 'styled-components';

export const StyledProductItem = styled.div`
  margin-bottom: ${(props) => props.theme.gutters.small};
`;

export const ProductItemHeader = styled.img`
  max-width: 100%;
`;

export const ProductItemHeaderWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: ${(props) => props.theme.gutters.smallBig};
  border-radius: ${(props) => props.theme.gutters.regular};
  text-align: center;
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
  cursor: pointer;
`;
