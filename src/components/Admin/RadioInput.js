import React from 'react';
import { InputRadio } from '../../style/AdminStyle/AddProductStyle';

const RadioInput = ({ input, type, id }) => {
console.log({...input})
  return <InputRadio {...input} type={type} id={id} />;
};

export default RadioInput;
