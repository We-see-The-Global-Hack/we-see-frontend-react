import React from "react";
import { Container } from "@material-ui/core";
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
      <Title text="Offer" />
      <div className={cn("")}>
        <Thing />
        <Thing />
        <Thing />
        <Thing />
        <Thing />
        <Thing />
        <Thing />
      </div>
    </Container>
  );
};

export default Offer;
