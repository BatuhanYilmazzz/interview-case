import React from 'react';
import { priceNormalize } from 'utils';
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
        <ProductItemHeader src="/images/productitem.png" />
      </ProductItemHeaderWrapper>
      <StyledPrice> &#8378; {priceNormalize(price)}</StyledPrice>
      <StyledItemName>{name}</StyledItemName>
      <StyledButton>Add</StyledButton>
    </StyledProductItem>
  );
};

export default ProductItem;
