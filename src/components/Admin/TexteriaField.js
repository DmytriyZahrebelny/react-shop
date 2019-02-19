import React from 'react';
import { DescriptionsField } from '../../style/AdminStyle/AddProductStyle';

const TexteriaField = ({ input, type, placeholder, meta : { error, touched } }) => {
  const errorText = touched && error && <div>{error}</div>

  return (
    <div>
      <DescriptionsField type={type} placeholder={placeholder} />
      {errorText}
    </div>
  );
};

export default TexteriaField;
