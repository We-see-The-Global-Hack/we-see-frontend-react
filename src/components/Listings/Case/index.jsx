import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Typography gutterBottom>Lizard</Typography>
      </CardActions>
    </Card>
  );
};

export default Case;
