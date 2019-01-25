import React from 'react';
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

export default ErrorField;
