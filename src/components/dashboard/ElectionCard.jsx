import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  card: {
    width: 275,
  },
  editButton: {
    marginLeft: 'auto',
  },
});

const ElectionCard = ({ title, position }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      className={classes.card}
      variant="outlined"
      onClick={() => history.push('/election')}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{position}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ElectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default ElectionCard;
