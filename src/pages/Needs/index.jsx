import React from "react";
import { Container } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// components
import Title from "components/Title";
import Thing from "components/Thing";
import Link from "components/Link";

// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Needs = () => {
  return (
    <Container maxWidth="lg">
      <Link to="/listings" style={cn("back_link")}>
        <KeyboardArrowLeftIcon />
        Back
      </Link>
      <Title text="My Needs" />
      <div>
        {initialNeeds.map((item, index) => (
          <Thing key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Needs;

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
