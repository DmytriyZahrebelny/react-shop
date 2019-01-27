import React from 'react';
import { oneOfType, string, shape, object, boolean } from 'prop-types';
import { FieldBox, TextField, ErrorText } from '../../style/AuthStyle/AuthStyle';

const ErrorField = ({ input, type, placeholder, meta : { error, touched } }) => {
  const errorText = touched && error && <ErrorText>{error}</ErrorText>

  return (
    <FieldBox>
      <TextField {...input} type={type} placeholder={placeholder} />
      {errorText}
    </FieldBox>
  );
}

ErrorField.propTypes = {
  input: object.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  meta: shape({
    error: oneOfType([
      string.isRequired,
    ]),
    touched: boolean,
  }),
};

export default ErrorField;
