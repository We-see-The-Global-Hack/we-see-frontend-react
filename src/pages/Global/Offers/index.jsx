import React from "react";
import { Button, Container, TextField } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Link from "components/Link";
// components
import Title from "components/Title";
import Thing from "components/Thing";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const GlobalOffers = () => {
  return (
    <Container maxWidth="lg">
      <Link to="/listings" style={cn("back_link")}>
        <KeyboardArrowLeftIcon />
        Back
      </Link>
      <Title text="Offer" />
      <div className={cn("globalOffers_filter")}>
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
        {initialOffer.map((item, index) => (
          <Thing key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default GlobalOffers;

const generalType = ["material", "time", "money"];

const initialOffer = [
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I can walk with dog",
    description: "I'm can with someone dogs",
    kind: "need",
    estimatedQuantity: {
      value: 6,
      measurements: "days",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I can walk with dog",
    description: "I'm can with someone dogs",
    kind: "need",
    estimatedQuantity: {
      value: 7,
      measurements: "days",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I can walk with dog",
    description: "I'm can with someone dogs",
    kind: "need",
    estimatedQuantity: {
      value: 5,
      measurements: "days",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I can walk with dog",
    description: "I'm can with someone dogs",
    kind: "need",
    estimatedQuantity: {
      value: 10,
      measurements: "days",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I can walk with dog",
    description: "I'm can with someone dogs",
    kind: "need",
    estimatedQuantity: {
      value: 10,
      measurements: "days",
    },
  },
  {
    generalType: "time",
    categoryName: "Agriculture & Animals' care",
    title: "I can walk with dog",
    description: "I'm can with someone dogs",
    kind: "need",
    estimatedQuantity: {
      value: 10,
      measurements: "days",
    },
  },
];
