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
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.summary}
        expanded={expanded === data.code}
        onChange={handleChange(data.code)}
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
          Gender
          {data.gender}
        </Typography>
      </AccordionDetails>
      <AccordionActions>
        <Button color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button type="submit" color="primary" variant="contained">
          Send
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

UnverifiedUser.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default UnverifiedUser;
