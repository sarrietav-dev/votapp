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

const ElectionCard = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  const onClickHandler = () => {
    history.push('/election');
  };

  return (
    <Card className={classes.card} variant="outlined" onClick={onClickHandler}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{data.title}</Typography>
          <Typography>{data.position}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ElectionCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};

export default ElectionCard;
