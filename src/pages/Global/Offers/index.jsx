import React from "react";
import { Button, Container } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Link from "components/Link";
// components
import Title from "components/Title";
import Thing from "components/Thing";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Filters from 'pages/Global/templates/Filters';
import useOnFilter from 'pages/Global/useOnFilter';

const cn = classNames.bind(styles);

const GlobalOffers = () => {
  const { filters, setFilters, resource, search, changeText } = useOnFilter('offer');
  
  return (
    <Container maxWidth="lg">
      <Link to="/listings" style={cn("back_link")}>
        <KeyboardArrowLeftIcon />
        Back
      </Link>
      <Title text="Offer" />
      <div className={cn("globalOffers_filter")}>
        <Filters changeText={changeText} filters={filters} setFilters={setFilters} />
        <Button variant="contained" color="primary" onClick={search}>
          Search
        </Button>
      </div>
      <div>
        {resource.map((item, index) => (
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
