import React, { useState } from "react";
import cardImage from "assets/img/card.jpg";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  makeStyles,
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

const Case = () => {
  const classes = useStyles();
  const [isOpen, setInOpen] = useState(false);

  return (
    <>
      <Card className={classes.root} variant="outlined" onClick={() => setInOpen(true)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cardImage}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions>
            <Typography gutterBottom>Mentoring & Teaching->Art</Typography>
        </CardActions>
      </Card>
      <Modal
        open={isOpen}
        onClose={() => setInOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={cn("module")}
      >
        <div className={cn("module_paper")}>
          <h2>Mentoring & Teaching->Art</h2>
          <CardMedia
              className={classes.media}
              image={cardImage}
              title="Contemplative Reptile"
          />
          <p>If you disable JavaScript, you will still see me.</p>
          <div className={cn("modal_buttons")}>
            <Button onClick={() => setInOpen(false)}>Close</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInOpen(false)}
            >
              Apply
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Case;
