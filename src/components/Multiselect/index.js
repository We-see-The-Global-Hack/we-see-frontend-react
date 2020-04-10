// react
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";

const Multiselect = ({ name, options, form, field, label, ...rest }) => {
  const setInitial = useRef(false);
  const [values, setValues] = useState([]);
  
  const onChange = useCallback((event, values) => {
    setValues(values);
  }, [form, field]);
  
  useEffect(() => { // poka tak =)
    if (field.value && field.value.length && !setInitial.current) {
      setInitial.current = true;
      setValues(field.value);
    }
  }, [field.value]);

  useEffect(() => {
    form.setFieldValue(field.name, values);
  }, [values]);
  
  const renderInput = useCallback(props => (
    <TextField
      variant="standard"
      label={label}
      placeholder={name}
      {...props }
    />
  ), [name]);
  
  return (
    <Autocomplete
      multiple
      id="size-small-standard-multi"
      size="small"
      options={options}
      getOptionLabel={val => val}
      onChange={onChange}
      value={values}
      {...rest}
      renderInput={renderInput}
    />
  );
};

export default Multiselect;
