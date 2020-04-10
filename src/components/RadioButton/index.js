// react
import React, {useCallback, useEffect, useRef, useState} from "react";
// mu
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

const RadioButton = ({
  field,
  name,
  options,
  form,
  ...props
}) => {
  const [values, setValues] = useState("");

  const onChange = useCallback(({target}) => {
    const {value} = target
    setValues(value);
  }, [form, field])

  useEffect(() => {
    form.setFieldValue(field.name, values);
  }, [values]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" {...field} {...props} name={name} onChange={onChange} value={values}>
        {options.map(option => (
          <FormControlLabel value={option} control={<Radio />} label={option}  />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
