import React from 'react';
import { FieldText } from '../../style/AdminStyle/AddProductStyle';

const ErrorField = ({ input, type, placeholder, meta : { error, touched } }) => {
  const errorText = touched && error && <div>{error}</div>

  return (
    <div>
      <FieldText {...input} type={type} placeholder={placeholder} />
      {errorText}
    </div>
  );
};

export default ErrorField;
