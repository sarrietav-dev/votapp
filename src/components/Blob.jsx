import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Blob = ({ text }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      variant="h4"
      color="secondary"
      style={{
        position: 'absolute',
        margin: '0 auto',
        alignSelf: 'center',
        justifySelf: 'center',
      }}
    >
      {text}
    </Typography>
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="500px"
      height="400px"
      style={{}}
    >
      <path
        fill="#8CB3FF"
        d="M26.8,-48.5C38.8,-39.6,55.2,-40.5,66.5,-34C77.8,-27.6,84,-13.8,83.2,-0.5C82.3,12.8,74.5,25.6,66.5,37.9C58.5,50.1,50.5,61.8,39.4,67.7C28.3,73.6,14.1,73.8,1.5,71.2C-11.1,68.6,-22.3,63.3,-33.1,57.2C-43.8,51.1,-54.3,44.2,-58.2,34.5C-62.1,24.9,-59.5,12.4,-56.8,1.6C-54,-9.3,-51.2,-18.6,-48,-29.6C-44.9,-40.7,-41.6,-53.4,-33.5,-64.6C-25.5,-75.8,-12.7,-85.4,-2.6,-80.8C7.4,-76.2,14.9,-57.5,26.8,-48.5Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
);

Blob.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Blob;
