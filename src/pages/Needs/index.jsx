import React from "react";
import { Container } from "@material-ui/core";
// components
import Title from "components/Title";
import Thing from "components/Thing";

const Needs = () => {
  return (
    <Container maxWidth="lg">
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
