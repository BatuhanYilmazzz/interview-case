import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Title } from 'theme';
import { TextField } from '@material-ui/core';
import { StyledBrand, FormGroupWrapper } from 'components/Brands/styled';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Tags = () => {
  const { tagsState } = useSelector((state) => state?.storeData);

  const [filter, setFilter] = useState('');

  return (
    <Fragment>
      <Title>Tags</Title>
      <StyledBrand>
        <TextField
          id="outlined-basic"
          label="Search Tags"
          variant="outlined"
          fullWidth
          onChange={(e) => setFilter(e.target.value)}
        />
        <FormGroupWrapper>
          <FormControlLabel
            control={<Checkbox name="All" defaultChecked color="primary" />}
            label="All"
          />
          <FormGroup>
            {tagsState &&
              tagsState
                .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
                .map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox name={item} color="primary" />}
                    label={item}
                  />
                ))}
          </FormGroup>
        </FormGroupWrapper>
      </StyledBrand>
    </Fragment>
  );
};

export default Tags;
