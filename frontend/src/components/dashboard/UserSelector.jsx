/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField } from '@material-ui/core';
import { setCandidates } from '../../store/reducers/elections.reducer';

const UserSelector = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <Autocomplete
      multiple
      options={users}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => dispatch(setCandidates(value))}
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
