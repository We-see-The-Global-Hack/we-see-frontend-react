import React, { useEffect } from "react";
import Title from "../../components/Title";
import Causes from "./Cases";
import Inbox from "./Inbox";
import api from "libs/apis";
// components
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";

import couchImg from "assets/img/listings/image.png";
import lgbtImg from "assets/img/listings/image (1).png";
import groceriesImg from "assets/img/listings/image (2)-min.png";
import dogImg from "assets/img/listings/dog-walking-right-wrong-01.jpg";
import foodImg from "assets/img/listings/image (3)-min.png";
import dogTollImg from "assets/img/listings/image (4).png";
import closesImg from "assets/img/listings/image (5).png";
import mountainImg from "assets/img/listings/mountain.jpg";


import classNames from "classnames/bind";
import styles from "./styles.module.scss";

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
      <Title text="My Listings" />
      <div className={cn("listings")}>
        <div className={cn("listings_cases")}>
          <Causes isOffers title="My Offers" link="/listings/offers" data={initialOffer} />
          <Causes isNeeds title="My Needs" link="/listings/needs" data={initialNeeds} />
          <Causes title="My Matches" link="/listings" data={initialOffer} />
          <Causes
            title="Needs/Offers based on your interest"
            link="/listings"
            data={initialOffer}
          />
        </div>
        <div>
          <div className={cn("listings_btn")}>
            <Link to="/search/offers" className={cn("listings_link")}>
              <Button color="primary" variant="contained">
                Offers
              </Button>
            </Link>
            <Link to="/search/needs" className={cn("listings_link")}>
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

const initialNeeds = [
  {
    generalType: "material",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Material Goods",
    userId: "5e9046b052f75f19a56647b2",
    title: "I am offering my blue couch",
    description: "I am offering my blue couch with pillows for those in need. It has been used, so there are some stains on it, but it will do for sleeping and chilling.\"\n",
    kind: "offer",
    estimatedQuantity: {
      value: 1,
      measurements: "couch",
    },
    image: couchImg,
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Agriculture & Animals' care",
    userId: "5e9046b052f75f19a56647b2",
    title: "Need someone to walk my dog",
    description: "Hello, I need someone that can walk my dog for me. I am 70 years old, and I have issues with walking long distances, and I would need someone that can walk my dog 3 times a day.\n",
    kind: "need",
    image: dogImg,
    estimatedQuantity: {
      value: 10,
      measurements: "days",
    },
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Groceries Help",
    userId: "5e9046b052f75f19a56647b2",
    title: "Help me get groceries",
    description: "I have been tested with the virus, and I have been tested positive for the virus. I am a single woman living at home, and I cannot go to the supermarket anymore. Could someone help me get the groceries?",
    kind: "need",
    image: groceriesImg,
    estimatedQuantity: {
      value: 10,
      measurements: "days",
    },
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Looking for LGBT+ mentor",
    userId: "5e9046b052f75f19a56647b2",
    title: "Looking for LGBT+ mentor",
    description: "I am a LGBT mentor that is looking for people to support. Please reach out to me if you need help",
    kind: "need",
    image: lgbtImg,
    estimatedQuantity: {
      value: 10,
      measurements: "days",
    },
  },
];

const initialOffer = [
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Food",
    userId: "5e9046b052f75f19a56647b2",
    title: "I am offering free meals",
    description: "I am offering free meals to those who need it the most. Vegetarian and vegan options available, I am also able to deliver it for free to your door",
    kind: "offer",
    image: foodImg,
    estimatedQuantity: {
      value: 3,
      measurements: "week",
    },
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Toys",
    userId: "5e9046b052f75f19a56647b2",
    title: "Little dog toys",
    description: "In my garage, I found this sweet little dog plushie. I don't use it anymore, and I think I can make someone happy with it. Feel free to ping me.",
    kind: "offer",
    image: dogTollImg,
    estimatedQuantity: {
      value: 1,
      measurements: "toy",
    },
  },
  {
    generalType: "material",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Clothes",
    userId: "5e9046b052f75f19a56647b2",
    title: "Free baby clothes",
    description: "My baby cannot wear these clothing anymore, so I am giving these away for free. Clothing appropriate for 1-3 year old.\n",
    kind: "offer",
    image: closesImg,
    estimatedQuantity: {
      value: 3,
      measurements: "items",
    },
  },
  {
    generalType: "time",
    categoryId: "5e9094df744248c0bee9e2e1",
    categoryName: "Mentoring & Teaching",
    userId: "5e9046b052f75f19a56647b2",
    title: "I need coach in mountaineering",
    description: "I need a coach in mountaineering",
    kind: "offer",
    image: mountainImg,
    estimatedQuantity: {
      value: 3,
      measurements: "week",
    },
  },
];
