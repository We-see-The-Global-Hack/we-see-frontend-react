import React from "react";
import { Button, Container } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// components
import Title from "components/Title";
import Thing from "components/Thing";
import Link from "components/Link";

// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import useOnFilter from 'pages/Global/useOnFilter';
import Filters from 'pages/Global/templates/Filters'

const cn = classNames.bind(styles);

const GlobalNeeds = () => {
  const { filters, setFilters, resource, search, changeText } = useOnFilter('need');
  
  return (
    <Container maxWidth="lg">
      <Link to="/listings" style={cn("back_link")}>
        <KeyboardArrowLeftIcon />
        Back
      </Link>
      <Title text="Global Needs" />
      <div className={cn("globalNeeds_filter")}>
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

export default GlobalNeeds;


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
