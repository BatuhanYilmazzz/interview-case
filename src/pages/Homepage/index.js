import React, { useEffect } from 'react';
import { Container } from 'theme';
import { StyledHomePage } from './styled';
import { Grid } from '@material-ui/core';
import { fetchCompanies, fetchProducts, setTageState } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';

import Products from 'components/Products';
import Sorting from 'components/Sorting';
import Brands from 'components/Brands';
import Tags from 'components/Tags';
import Basket from 'components/Basket';

const HomePage = () => {
  const dispatch = useDispatch();

  const { tagState } = useSelector((state) => state?.storeData);

  useEffect(() => {
    if (!tagState) {
      dispatch(setTageState());
    }
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
            <Basket />
          </Grid>
        </Grid>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
