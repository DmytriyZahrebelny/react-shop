import React from 'react';
import { FieldText, ErrorText } from '../../style/AdminStyle/AddProductStyle';

const ErrorField = ({ input, type, placeholder, value, meta : { error, touched } }) => {
  const errorText = touched && error && <ErrorText>{error}</ErrorText>
console.log(value)
  return (
    <div>
      <FieldText {...input} type={type} placeholder={placeholder} value={input.value} />
      {errorText}
    </div>
  );
};

export default ErrorField;
