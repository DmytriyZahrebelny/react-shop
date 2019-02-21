import React from 'react';
import { InputRadio } from '../../style/AdminStyle/AddProductStyle';

const RadioInput = ({ input, type, id, activeButton }) => {
  input.checked = input.value === activeButton;

  return <InputRadio {...input} type={type} id={id} />;
};

export default RadioInput;
