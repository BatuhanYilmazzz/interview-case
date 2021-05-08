import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Title } from 'theme';
import { TextField } from '@material-ui/core';
import { StyledBrand, FormGroupWrapper } from 'components/Brands/styled';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Tags = () => {
  const { productsData } = useSelector((state) => state?.storeData);

  const [filter, setFilter] = useState('');

  const sortTags = () => {
    let tags = [];
    productsData.forEach((item) => {
      item.tags.forEach((i) => {
        tags.push(i);
      });
    });

    // eslint-disable-next-line no-undef
    const newTags = Array.from(new Set(tags));

    return newTags;
  };

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
            {sortTags() &&
              sortTags()
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
