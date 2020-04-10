// react
import React, { useCallback } from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";

const Multiselect = ({ name, label, options, field, form, ...rest }) => {
  console.log('form', form, name);
  
  const onChange = useCallback((event, values) => {
    form.setFieldValue(name, values);
  }, [name]);
  
  return (
    <Autocomplete
      multiple
      id="size-small-standard-multi"
      size="small"
      options={options}
      getOptionLabel={val => val}
      onChange={onChange}
      renderInput={({...params}) => {
        return <TextField
          {...params}
          variant="standard"
          label={label}
          placeholder={name}
          {...rest}
        />
      }}
    />
  );
};

export default Multiselect;
