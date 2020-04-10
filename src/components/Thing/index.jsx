import React from "react";
import { Button, CardMedia, Typography } from "@material-ui/core";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import cardImage from "assets/img/mountain.jpg";

const cn = classNames.bind(styles);

const Thing = () => {
  return (
    <div className={cn("thing")}>
      <CardMedia
        className={cn("thing_image")}
        image={cardImage}
        title="Contemplative Reptile"
      />
      <div className={cn("thing_content")}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={cn("thing_title")}
        >
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={cn("thing_description")}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </div>

      <Button color="primary" variant="contained">
        Open
      </Button>
    </div>
  );
};

export default Thing;
