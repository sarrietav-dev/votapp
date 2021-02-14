import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import VoteIcon from '@material-ui/icons/HowToVote';
import { useSelector } from 'react-redux';

const CandidateCard = ({ data, onClick }) => {
  const locales = useSelector((state) => state.locales.locale.candidateCard);
  return (
    <Card style={{ maxWidth: 500, width: 250 }}>
      <CardHeader
        avatar={<Avatar>{data.name[0]}</Avatar>}
        title={locales.candidateCard}
      />
      <CardContent>
        <Typography>{data.name}</Typography>
        <Typography>{data.code}</Typography>
        <Grid container justify="space-evenly" style={{ marginTop: 10 }}>
          <Grid item>
            <Typography>{data.career}</Typography>
          </Grid>
          <Grid item>
            <Typography>
              {data.semester !== ' ' ? `Semester: ${data.semester}` : ''}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <IconButton onClick={() => onClick(data._id)}>
          <VoteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

CandidateCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    career: PropTypes.string,
    semester: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CandidateCard;
