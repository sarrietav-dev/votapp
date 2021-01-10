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
    margin: 25,
  },
  editButton: {
    marginLeft: 'auto',
  },
});

const ElectionCard = ({ title, position }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{position}</Typography>
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
