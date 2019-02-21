import React from 'react';
import { DescriptionsField, ErrorDescriptionsText } from '../../style/AdminStyle/AddProductStyle';

const TexteriaField = ({ input, type, placeholder, meta : { error, touched } }) => {
  const errorText = touched && error && <ErrorDescriptionsText>{error}</ErrorDescriptionsText>

  return (
    <div>
      <DescriptionsField {...input} type={type} placeholder={placeholder} />
      {errorText}
    </div>
  );
};

export default TexteriaField;
