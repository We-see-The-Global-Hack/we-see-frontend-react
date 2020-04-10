// react
import React from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";

const causes = [
  "Education",
  "Medical/Health",
  "Gender Equality",
  "Environmental/Animals protection",
  "Cultural/Arts",
  "Sports/Tourism/Recreation/Hobby",
  "Social Services/Welfare/Poverty alleviation",
  "Local Development/Communities",
  "Support for Nonprofits or social business",
  "Religion",
  "International needs/Development aid",
  "Law and rights Protection/Human Rights",
  "Public affairs/Democracy/Advocacy",
  "Labour Market/Professional affairs",
  "Entrepreneurship/Income generation"
];

const targetAudience = [
  "Children & Youth",
  "Local Residents/Community",
  "Women",
  "Seniors",
  "LGBT+",
  "People with medical conditions or disabilities",
  "Other Minorities",
  "Animals",
  "Other Nonprofits and social business"
];

const Multiselect = ({ name, label, ...rest }) => {
  const options = name === "causes" ? causes : targetAudience;
  console.log(name, rest);

  return (
    <Autocomplete
      multiple
      id="size-small-standard-multi"
      size="small"
      options={options}
      getOptionLabel={val => val}
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
