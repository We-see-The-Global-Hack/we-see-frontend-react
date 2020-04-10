import React from "react";
import Title from "../../components/Title";
import Causes from "./Cases";
import Inbox from "./Inbox";
import { Container } from "@material-ui/core";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Listings = () => {
  return (
    <Container maxWidth='lg'>
      <Title text="Your Listings" />
      <div className={cn("listings")}>
        <div className={cn("listings_cases")}>
          <Causes title="Offers" />
          <Causes title="Needs" />
          <Causes title="Your Matches" />
          <Causes title="Needs/Offers based on your interest" />
        </div>
        <Inbox />
      </div>
    </Container>
  );
};

export default Listings;
