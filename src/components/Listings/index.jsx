import React from "react";
import Title from "./Title";
import Causes from "./Cases";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Listings = () => {
  return (
    <div className={cn("listings")}>
      <Title text="Your Listings" />
      <div className={cn("listings_cases")}>
        <Causes title="Offers" />
        <Causes title="Needs" />
        <Causes title="Your Matches" />
        <Causes title="Needs/Offers based on your interest" />
      </div>
    </div>
  );
};

export default Listings;
