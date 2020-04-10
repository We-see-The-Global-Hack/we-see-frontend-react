import React, { useState } from "react";
import mountainImage from "assets/img/mountain.jpg";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  makeStyles,
  CardContent,
  Modal,
  Button,
} from "@material-ui/core";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
  },
  media: {
    height: 100,
  },
});

const Case = ({
  categoryName,
  title,
  description,
  estimatedQuantity,
}) => {
  const classes = useStyles();
  const [isOpen, setInOpen] = useState(false);

  return (
    <>
      <Card
        className={classes.root}
        variant="outlined"
        onClick={() => setInOpen(true)}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={mountainImage}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions>
          <Typography gutterBottom>{categoryName}</Typography>
        </CardActions>
      </Card>
      <Modal
        open={isOpen}
        onClose={() => setInOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={cn("module")}
      >
        <Card className={cn("module_paper")}>
          <CardMedia
            className={cn("module_image")}
            title="Contemplative Reptile"
            image={mountainImage}
          />

          <CardContent>
            <div className={cn('module_header')}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="h5"  component="p" color='primary'>
                {`${estimatedQuantity.value} ${estimatedQuantity.measurements}`}
              </Typography>
            </div>
            <Typography variant="caption"  component="p" className={cn('module_category')}>
              {categoryName}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => setInOpen(false)}
            >
              Close
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
};

export default Case;
