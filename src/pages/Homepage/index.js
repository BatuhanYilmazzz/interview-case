import React, { useEffect } from 'react';
import { Container } from 'theme';
import { StyledHomePage } from './styled';
import { Grid } from '@material-ui/core';
import { fetchCompanies, fetchProducts } from 'store/actions';
import { useDispatch } from 'react-redux';

import Products from 'components/Products';
import Sorting from 'components/Sorting';
import Brands from 'components/Brands';
import Tags from 'components/Tags';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({}));
    dispatch(fetchCompanies());
  }, []);

  return (
    <StyledHomePage>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={3} xs={12}>
            <Sorting />
            <Brands />
            <Tags />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Products />
          </Grid>
          <Grid item lg={3} xs={12}>
            basket
          </Grid>
        </Grid>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
