import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../store/reducers/locales.reducer';

const LocaleMenu = () => {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(setLocale(e.target.value));
  };
  return (
    <FormControl>
      <InputLabel>Language</InputLabel>
      <Select onChange={onChangeHandler}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LocaleMenu;
