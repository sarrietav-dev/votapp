import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../store/reducers/locales.reducer';

const LocaleSelect = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.locales.language);
  const onChangeHandler = (e) => {
    dispatch(setLocale(e.target.value));
  };
  return (
    <FormControl style={{ padding: 10 }}>
      <InputLabel>Language</InputLabel>
      <Select onChange={onChangeHandler} defaultValue={currentLanguage}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LocaleSelect;
