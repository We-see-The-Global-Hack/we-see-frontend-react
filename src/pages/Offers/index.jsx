import React from "react";
import { Container } from "@material-ui/core";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
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
      <Link to="/listings" style={cn('back_link')}><KeyboardArrowLeftIcon />Back</Link>
      <Title text="My Offer" />
      <div>
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
