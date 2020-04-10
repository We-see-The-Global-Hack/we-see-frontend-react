import React, { useState } from "react";
import cardImage from "assets/img/card.jpg";
import mountainImage from 'assets/img/mountain.jpg';
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

const Case = () => {
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
        <Card className={cn('module_paper')}>
            <CardMedia
              className={cn('module_image')}
              title="Contemplative Reptile"
              image={mountainImage}
            />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => setInOpen(false)}>
              Close
            </Button>
            <Button size="small" color="primary" variant='contained'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
};

export default Case;
