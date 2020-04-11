import React, { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MUSelect from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const Select = ({ field, options, form: {touched, errors, setFieldValue}, label }) => {
  const [type, setType] = React.useState("");

  const handleChange = event => {
    setType(event.target.value);
  };

  useEffect(() => {
    setFieldValue(field.name, type);
  }, [type]);

  const isError = Boolean(touched[field.name] && errors[field.name]);
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <MUSelect
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        onChange={handleChange}
        style={{border: "red"}}
      >
        {options.map((el, i) => (
          <MenuItem key={i} value={el.value}>
            {el.name}
          </MenuItem>
        ))}
      </MUSelect>
      <span style={{color: "#f44336"}}>{isError && errors[field.name]}</span>
      </>
  );
};

export default Select;
