/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import {
  denyUserThunk,
  verifyUserThunk,
} from '../../store/thunks/verify.thunks';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    backgroundColor: '#d5d5d5',
  },
  summaryText: {
    margin: theme.spacing(1),
  },
  details: {
    flexDirection: 'column',
  },
}));

const UnverifiedUser = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAccept = () => {
    dispatch(verifyUserThunk(data._id));
  };

  const handleDeny = () => {
    dispatch(denyUserThunk(data._id));
  };

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.summary}
      >
        <Typography variant="h5">{data.name}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Typography gutterBottom>
          Code:
          {data.code}
        </Typography>
        <br />
        <Typography gutterBottom>
          Email:
          {data.email}
        </Typography>
        <br />
        <Typography>
          Gender:
          {data.gender}
        </Typography>
      </AccordionDetails>
      <AccordionActions>
        <Button color="secondary" variant="outlined" onClick={handleDeny}>
          Deny
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={handleAccept}
        >
          Accept
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

UnverifiedUser.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default UnverifiedUser;
