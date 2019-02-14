import React from 'react';

const ErrorField = ({ input, type, placeholder, meta : { error, touched } }) => {
  const errorText = touched && error && <div>{error}</div>

  return (
    <div>
      <input {...input} type={type} placeholder={placeholder} />
      {errorText}
    </div>
  );
};

export default ErrorField;