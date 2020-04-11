import React from "react";
import { Button, CardMedia, Typography } from "@material-ui/core";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import cardImage from "assets/img/mountain.jpg";

const cn = classNames.bind(styles);

const Thing = ({ categoryName, title, description, estimatedQuantity }) => {
  return (
    <div className={cn("thing")}>
      <CardMedia
        className={cn("thing_image")}
        image={cardImage}
        title="Contemplative Reptile"
      />
      <div className={cn("thing_wrapper")}>
        <div className={cn("thing_container")}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={cn("thing_title")}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            className={cn("thing_category")}
          >
            {categoryName}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={cn("thing_description")}
          >
            {description}
          </Typography>
          <p>
            from: <span style={{ color: 'green', textDecoration: 'underline', cursor: 'pointer' }}>John Snow</span>
          </p>
        </div>
        <div className={cn('thing_add')}>
          <Typography variant="h5" component="p" color="primary">
            {`${estimatedQuantity.value} ${estimatedQuantity.measurements}`}
          </Typography>
          <Button color="primary" variant="contained">
            Open
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thing;
