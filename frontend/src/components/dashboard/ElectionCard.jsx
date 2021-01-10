import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  card: {
    width: 275,
  },
  editButton: {
    marginLeft: 'auto',
  },
});

const ElectionCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography>Election</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            nulla, ullam numquam minima architecto maiores similique, atque
            voluptas
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton className={classes.editButton}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ElectionCard;
