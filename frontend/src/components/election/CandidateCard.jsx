import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';

const CandidateCard = ({ data, onClick }) => (
  <Card onClick={onClick} style={{ maxWidth: 500 }}>
    <CardHeader avatar={<Avatar>{data.name[0]}</Avatar>} title="Candidate" />
    <CardContent>
      <Typography>{data.name}</Typography>
      <Typography>{data.code}</Typography>
    </CardContent>
  </Card>
);

CandidateCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CandidateCard;
