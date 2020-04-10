// react
import React from 'react';
// mu
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";

const RadioButton = ({value, handleChange}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
