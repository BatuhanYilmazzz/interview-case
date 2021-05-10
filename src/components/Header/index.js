import React from 'react';
import { StyledHeader, StyledLogo, StyledHeaderTotalPrice, StyledHeaderWrapper } from './styled';
import { useSelector } from 'react-redux';
import { sumTotalPrice } from 'utils';
import { Container } from 'theme';
const Header = () => {
  const { basket } = useSelector((state) => state?.storeData);
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <StyledLogo src="/images/logo.png" alt="" />

          <StyledHeaderTotalPrice> ₺ {sumTotalPrice(basket)}</StyledHeaderTotalPrice>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
