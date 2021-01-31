/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField } from '@material-ui/core';

const UserSelector = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <Autocomplete
      multiple
      options={users}
      getOptionLabel={(option) => option.name}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="default"
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Select the candidates"
        />
      )}
    />
  );
};

export default UserSelector;
