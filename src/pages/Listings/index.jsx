import React, { useEffect } from "react";
import Title from "../../components/Title";
import Causes from "./Cases";
import Inbox from "./Inbox";
import api from "libs/apis";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ApplicationBar from 'components/AppBar';

const cn = classNames.bind(styles);

const Listings = () => {
  useEffect(() => {
    api.listings
      .get()
      .then((res) => console.log(res))
      .catch((res) => console.error(res));
  }, []);
  return (
    <Container maxWidth="lg">
      <ApplicationBar />
      <Title text="My Listings" />
      <div className={cn("listings")}>
        <div className={cn("listings_cases")}>
          <Causes
            title="My Offers"
            link="/listings/offers"
            data={initialOffer}
          />
          <Causes title="My Needs" link="/listings/needs" data={initialNeeds} />
          <Causes title="My Matches" link="/listings" data={initialOffer} />
          <Causes
            title="Needs/Offers based on your interest"
            link="/listings"
            data={initialOffer}
          />
        </div>
        <div>
          <div className={cn("listings_btn")}>
            <Link to="/global/offers" className={cn("listings_link")}>
              <Button color="primary" variant="contained">
                Offers
              </Button>
            </Link>
            <Link to="/global/needs" className={cn("listings_link")}>
              <Button color="primary" variant="contained">
                Needs
              </Button>
            </Link>
          </div>

          <Inbox />
        </div>
      </div>
    </Container>
  );
};

export default Listings;

const initialOffer = [
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Agriculture & Animals' care",
    userId: "5e9046b052f75f19a56647b2",
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
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Agriculture & Animals' care",
    userId: "5e9046b052f75f19a56647b2",
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
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Agriculture & Animals' care",
    userId: "5e9046b052f75f19a56647b2",
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
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Agriculture & Animals' care",
    userId: "5e9046b052f75f19a56647b2",
    title: "I can walk with dog",
    description: "I'm can with someone dogs",
    kind: "need",
    estimatedQuantity: {
      value: 10,
      measurements: "days",
    },
  },
];

const initialNeeds = [
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Mentoring & Teaching->Art",
    userId: "5e9046b052f75f19a56647b2",
    title: "I need help with my dog",
    description: "I need teacher for learning art",
    kind: "need",
    estimatedQuantity: {
      value: 3,
      measurements: "week",
    },
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Mentoring & Teaching->Art",
    userId: "5e9046b052f75f19a56647b2",
    title: "I need help with my dog",
    description: "I need teacher for learning art",
    kind: "need",
    estimatedQuantity: {
      value: 3,
      measurements: "week",
    },
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Mentoring & Teaching->Art",
    userId: "5e9046b052f75f19a56647b2",
    title: "I need help with my dog",
    description: "I need teacher for learning art",
    kind: "need",
    estimatedQuantity: {
      value: 3,
      measurements: "week",
    },
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Mentoring & Teaching->Art",
    userId: "5e9046b052f75f19a56647b2",
    title: "I need help with my dog",
    description: "I need teacher for learning art",
    kind: "need",
    estimatedQuantity: {
      value: 3,
      measurements: "week",
    },
  },
];
