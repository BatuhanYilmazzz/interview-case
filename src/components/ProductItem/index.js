import React from 'react';
import { priceNormalize } from 'utils';
import {
  StyledProductItem,
  ProductItemHeaderWrapper,
  ProductItemHeader,
  StyledItemName,
  StyledButton
} from './styled';
import { StyledPrice } from 'theme';
import { useDispatch } from 'react-redux';
import { addItemBasket } from 'store/actions';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <StyledProductItem>
      <ProductItemHeaderWrapper>
        <ProductItemHeader src="/images/productitem.png" />
      </ProductItemHeaderWrapper>
      <StyledPrice> &#8378; {priceNormalize(item.price)}</StyledPrice>
      <StyledItemName>{item.name}</StyledItemName>
      <StyledButton onClick={() => dispatch(addItemBasket(item))}>Add</StyledButton>
    </StyledProductItem>
  );
};

export default ProductItem;
