import React from "react";
import { Button, Container } from "@material-ui/core";
// components
import Title from "components/Title";
import Thing from "components/Thing";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Filters from "pages/Global/templates/Filters";
import useOnFilter from "pages/Global/useOnFilter";

const cn = classNames.bind(styles);

const GlobalOffers = () => {
  const { filters, setFilters, resource, search, changeText } = useOnFilter(
    "offer"
  );

  return (
    <Container maxWidth="lg">
      <Title text="Search Offer" />
      <div className={cn("globalOffers_filter")}>
        <Filters
          changeText={changeText}
          filters={filters}
          setFilters={setFilters}
        />
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

