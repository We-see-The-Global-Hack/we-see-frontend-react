import React from "react";
// components
import Title from "components/Title";
import { TextField, Button, Container } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import User from "./User";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
// images
import avatarImage1 from "assets/img/avatar.jpg";
import avatarImage2 from "assets/img/avatar2.jpg";

const cn = classNames.bind(styles);

const Search = () => {
  return (
    <Container maxWidth='lg'>
      <Title text="Search" />
      <div className={cn("search_filters")}>
        <div className={cn("search_filters-selectors")}>
          <Autocomplete
            options={causes}
            style={{ width: 230 }}
            renderInput={(params) => (
              <TextField {...params} label="Causes" variant="outlined" />
            )}
          />
          <Autocomplete
            options={target_audience}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Target audience"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            options={gender}
            style={{ width: 230 }}
            renderInput={(params) => (
              <TextField {...params} label="Gender" variant="outlined" />
            )}
          />
        </div>
        <div className={cn("search_filters-name")}>
          <TextField label="User" style={{ width: 500 }} />
          <Button variant="contained">Search</Button>
        </div>
      </div>
      <div className={cn("search_users")}>
        <div className={cn("search_users-wrapper")}>
          <User
            avatar={avatarImage1}
            name="John Smith"
            email="john.smith@mail.com"
          />
          <User
            avatar={avatarImage2}
            name="John Smith"
            email="john.smith@mail.com"
          />
          <User
            avatar={avatarImage1}
            name="John Smith"
            email="john.smith@mail.com"
          />
          <User
            avatar={avatarImage2}
            name="John Smith"
            email="john.smith@mail.com"
          />
          <User
            avatar={avatarImage2}
            name="John Smith"
            email="john.smith@mail.com"
          />
          <User
            avatar={avatarImage2}
            name="John Smith"
            email="john.smith@mail.com"
          />
          <User
            avatar={avatarImage1}
            name="John Smith"
            email="john.smith@mail.com"
          />
          <User
            avatar={avatarImage1}
            name="John Smith"
            email="john.smith@mail.com"
          />
        </div>
      </div>
    </Container>
  );
};

export default Search;

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
  "Entrepreneurship/Income generation",
];

const target_audience = [
  "Children & Youth",
  "Local Residents/Community",
  "Women",
  "Seniors",
  "LGBT+",
  "People with medical conditions or disabilities",
  "Other Minorities",
  "Animals",
  "Other Nonprofits and social business",
];

const gender = ["Male", "Female", "Other"];
