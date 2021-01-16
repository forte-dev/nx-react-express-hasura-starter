import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function SelectField(props) {
  const { data, ...rest } = props;
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const { name, value } = field;
  const { touched, error } = meta;
  const isError = touched && !!error;

  return (
    <Autocomplete
      id={name}
      blurOnSelect
      autoComplete
      autoHighlight
      options={[value, ...data]}
      filterOptions={(options) => options.filter((option) => option !== '')}
      value={value}
      getOptionLabel={(option) => option?.label || ''}
      getOptionSelected={(option, value) => option?.value === value?.value}
      onChange={(event, newValue) => {
        helpers.setValue(newValue);
      }}
      data-testid="select-field-container"
      renderOption={(props, option) => <li {...props}>{option?.label}</li>}
      renderInput={(params) => {
        return (
          <TextField
            {...rest}
            {...params}
            error={isError}
            variant="outlined"
            data-testid="select-field"
            helperText={isError && t(error)}
          />
        );
      }}
    />
  );
}
