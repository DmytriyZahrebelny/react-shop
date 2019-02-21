import React from 'react';
import { FieldText, ErrorText } from '../../style/AdminStyle/AddProductStyle';

const ErrorField = ({ input, type, placeholder, meta : { error, touched } }) => {
  const errorText = touched && error && <ErrorText>{error}</ErrorText>

  return (
    <div>
      <FieldText {...input} type={type} placeholder={placeholder} />
      {errorText}
    </div>
  );
};

export default ErrorField;
