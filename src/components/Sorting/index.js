import React, { Fragment, useState } from 'react';

import { Title } from 'theme';
import { StyledSorting } from './styled';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Sorting = () => {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Fragment>
      <Title>Sorting</Title>
      <StyledSorting>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Price low to high"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Price high to low"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="New to old"
            />
            <FormControlLabel
              value="disabled"
              control={<Radio color="primary" />}
              label="Old to new"
            />
          </RadioGroup>
        </FormControl>
      </StyledSorting>
    </Fragment>
  );
};

export default Sorting;
