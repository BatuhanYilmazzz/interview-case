import React from 'react';
import {
  StyledBasket,
  SyledBasketItem,
  StyledButton,
  StyledQuantity,
  StyledNoItem,
  StyledTotalPrice,
  StyledTotalPriceWrapper
} from './styled';
import { Box } from '@material-ui/core';
import { StyledPrice, theme, Title } from 'theme';
import { useSelector } from 'react-redux';
import { sumTotalPrice } from 'utils';

const Basket = () => {
  const { basket } = useSelector((state) => state?.storeData);

  return (
    <StyledBasket>
      {basket.length < 1 && <StyledNoItem>You have no item</StyledNoItem>}
      {basket &&
        basket.length > 0 &&
        basket.map((item) => (
          <SyledBasketItem key={item.id}>
            <Box>
              <Box>
                <Title color={theme.colors.secondary}>{item.name}</Title>
              </Box>
              <Box>
                <StyledPrice fontWeight={500}>₺ {item.price}</StyledPrice>
              </Box>
            </Box>
            <Box display="flex">
              <StyledButton>-</StyledButton>
              <StyledQuantity>1</StyledQuantity>
              <StyledButton>+</StyledButton>
            </Box>
          </SyledBasketItem>
        ))}
      {basket && basket.length >= 1 && (
        <StyledTotalPriceWrapper textAlign="right">
          <StyledTotalPrice>₺ {sumTotalPrice(basket)}</StyledTotalPrice>
        </StyledTotalPriceWrapper>
      )}
    </StyledBasket>
  );
};

export default Basket;
