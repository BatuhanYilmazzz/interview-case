import React from 'react';
import {
  StyledProductItem,
  ProductItemHeaderWrapper,
  ProductItemHeader,
  StyledPrice,
  StyledItemName,
  StyledButton
} from './styled';

const ProductItem = ({ price, name }) => {
  return (
    <StyledProductItem>
      <ProductItemHeaderWrapper>
        <ProductItemHeader />
      </ProductItemHeaderWrapper>
      <StyledPrice> &#8378; {price}</StyledPrice>
      <StyledItemName>{name}</StyledItemName>
      <StyledButton>Add</StyledButton>
    </StyledProductItem>
  );
};

export default ProductItem;
