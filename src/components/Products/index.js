import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';

import { StyledProducts, ReactPaginateWrapper } from './styled';

import ProductItem from 'components/ProductItem';

const Products = () => {
  const { productsData, totalPages } = useSelector((state) => state?.storeData);

  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <StyledProducts>
      <Grid container spacing={3}>
        {productsData &&
          productsData
            .slice(pagesVisited, pagesVisited + productsPerPage)
            .map(({ price, name }, index) => (
              <Grid lg={3} item key={index}>
                <motion.div
                  key={pageNumber}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}>
                  <ProductItem price={price} name={name} />
                </motion.div>
              </Grid>
            ))}
      </Grid>
      <ReactPaginateWrapper>
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={totalPages}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </ReactPaginateWrapper>
    </StyledProducts>
  );
};

export default Products;
