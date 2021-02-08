/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CandidateCard;
