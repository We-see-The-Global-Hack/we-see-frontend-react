import React from "react";
import {Button, Container, TextField} from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// components
import Title from "components/Title";
import Thing from "components/Thing";
import Link from "components/Link";

// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";

const cn = classNames.bind(styles);

const GlobalNeeds = () => {
  return (
    <Container maxWidth="lg">
      <Link to="/listings" style={cn("back_link")}>
        <KeyboardArrowLeftIcon />
        Back
      </Link>
      <Title text="My Needs" />
      <div className={cn("globalNeeds_filter")}>
        <TextField label="Title" style={{ width: 300 }} />
        <TextField label="Category Name" style={{ width: 300 }} />
        <Autocomplete
            options={generalType}
            style={{ width: 300 }}
            size='small'
            renderInput={(params) => (
                <TextField {...params} label="Target audience" variant="outlined" />
            )}
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
      <div>
        {initialNeeds.map((item, index) => (
          <Thing key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default GlobalNeeds;

const generalType = ["material", "time", "money"];

const initialNeeds = [
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I need help with my dog",
    description: "I'm ill and cannot walk my dog up",
    kind: "need",
    estimatedQuantity: {
      value: 6,
      measurements: "hours",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I need help with my dog",
    description: "I'm ill and cannot walk my dog up",
    kind: "need",
    estimatedQuantity: {
      value: 7,
      measurements: "hours",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I need help with my dog",
    description: "I'm ill and cannot walk my dog up",
    kind: "need",
    estimatedQuantity: {
      value: 5,
      measurements: "hours",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I need help with my dog",
    description: "I'm ill and cannot walk my dog up",
    kind: "need",
    estimatedQuantity: {
      value: 5,
      measurements: "hours",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I need help with my dog",
    description: "I'm ill and cannot walk my dog up",
    kind: "need",
    estimatedQuantity: {
      value: 3,
      measurements: "hours",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I need help with my dog",
    description: "I'm ill and cannot walk my dog up",
    kind: "need",
    estimatedQuantity: {
      value: 3,
      measurements: "hours",
    },
  },
];
