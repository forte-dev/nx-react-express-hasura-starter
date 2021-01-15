import React from 'react';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

export default function InputField(props) {
  const { ...rest } = props;
  const { t } = useTranslation();
  const [field, meta] = useField(props);

  const { touched, error } = meta;
  const isError = touched && !!error;

  return (
    <TextField
      helperText={isError && t(error)}
      data-testid="input-field"
      variant="outlined"
      error={isError}
      type="text"
      fullWidth
      {...field}
      {...rest}
    />
  );
}
