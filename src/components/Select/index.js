import React, { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MUSelect from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const Select = ({ field, options, form, label }) => {
  const [type, setType] = React.useState("");

  const handleChange = event => {
    setType(event.target.value);
  };

  useEffect(() => {
    form.setFieldValue(field.name, type);
  }, [type]);
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <MUSelect
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        onChange={handleChange}
      >
        {options.map((el, i) => (
          <MenuItem key={i} value={el.value}>
            {el.name}
          </MenuItem>
        ))}
      </MUSelect>
    </>
  );
};

export default Select;
