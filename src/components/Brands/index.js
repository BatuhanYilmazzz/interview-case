import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField } from '@material-ui/core';
import { Title } from 'theme';
import { StyledBrand, FormGroupWrapper } from './styled';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Brands = () => {
  const { companiesData } = useSelector((state) => state?.storeData);

  const [filter, setFilter] = useState('');

  return (
    <Fragment>
      <Title>Brands</Title>
      <StyledBrand>
        <TextField
          id="outlined-basic"
          label="Search Brands"
          variant="outlined"
          fullWidth
          onChange={(e) => setFilter(e.target.value)}
        />
        <FormGroupWrapper>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="All" defaultChecked color="primary" />}
              label="All"
            />
            {companiesData &&
              companiesData
                .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
                .map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox name={item.slug} color="primary" />}
                    label={item.name}
                  />
                ))}
          </FormGroup>
        </FormGroupWrapper>
      </StyledBrand>
    </Fragment>
  );
};

export default Brands;
