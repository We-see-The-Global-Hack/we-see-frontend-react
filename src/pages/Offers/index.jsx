import React from "react";
import { Container } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Link from "components/Link";
// components
import Title from "components/Title";
import Thing from "components/Thing";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Offer = () => {
  return (
    <Container maxWidth="lg">
      <Link to="/listings" style={cn("back_link")}>
        <KeyboardArrowLeftIcon />
        Back
      </Link>
      <Title text="My Offer" />
      <div>
        {initialOffer.map((item, index) => (
          <Thing key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Offer;

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
