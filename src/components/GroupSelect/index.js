// react
import React, { useEffect } from "react";
// mu
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
}));

export default ({ field, name, options, form, label, ...props }) => {
  const [selectValue, setSelectValue] = React.useState({
    value: "",
    measurements: ""
  });

  const handleChangeValueSelect = event => {
    setSelectValue(prevState => ({ ...prevState, value: event.target.value }));
  };

  const handleChangeMeasurementSelect = event => {
    setSelectValue(prevState => ({ ...prevState, measurements: event.target.value }));
  };

  useEffect(() => {
    form.setFieldValue(field.name, selectValue);

  } , [selectValue])


  const classes = useStyles()

  return (
    <FormControl className={classes.formControl} >
      <InputLabel htmlFor="grouped-native-select">{label}</InputLabel>
      <Select native defaultValue="" id="grouped-native-select" onChange={handleChangeValueSelect}>
        <option aria-label="None" value="value" />
        <optgroup label="Value">
          {[...new Array(11).keys()].splice(1).map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </optgroup>
      </Select>
      <Select native defaultValue="" id="grouped-native-select" onChange={handleChangeMeasurementSelect}>
        <option aria-label="None" value="value" />
        <optgroup label="Measurements" value="measurements">
          {["hours", "days", "weeks"].map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </optgroup>
      </Select>
    </FormControl>
  );
};
