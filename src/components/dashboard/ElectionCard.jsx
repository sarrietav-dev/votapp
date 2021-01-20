/* eslint-disable no-underscore-dangle */
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
import { useDispatch } from 'react-redux';
import { setCurrentElection } from '../../store/actions/election.actions';

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
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setCurrentElection(data._id));
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
    _id: PropTypes.string,
    title: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};

export default ElectionCard;
