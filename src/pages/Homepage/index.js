import React, { useEffect } from 'react';
import { Container } from 'theme';
import { StyledHomePage } from './styled';
import { Grid } from '@material-ui/core';
import { fetchProducts } from 'store/actions';
import { useDispatch } from 'react-redux';

import Products from 'components/Products';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);

  return (
    <StyledHomePage>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            sort bar
          </Grid>
          <Grid item lg={6}>
            <Products />
          </Grid>
          <Grid item lg={3}>
            basket
          </Grid>
        </Grid>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
