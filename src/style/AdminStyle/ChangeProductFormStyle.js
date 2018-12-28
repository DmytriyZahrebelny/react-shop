import styled from 'styled-components';

export const FieldsContainer = styled.div`
  position: absolute;
  content: "";
  width: 500px;
  height: 500px;
  left: 835px;
  top: 125px;
  list-style: none;
`;

export const CurrentValue = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #FFD933;
`;

export const ItemParam = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #FF8F33;
`;

export const TextareaField = styled.textarea`
  width: 462px;
  height: 80px;
  font-size: 16px;
`;

export const Fieldset = styled.fieldset`
  margin: 20px 0 20px;
  border: 2px solid #FF8F33;
`;

export const TextField = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 6px 0;
`;

export const Legend = styled.legend`
  color: #FF8F33;
`;

export const Input = styled.input`
  display: block;
  width: 161px;
  margin: 10px auto 0;
  padding: 7px;
  font-size: 16px;
  color: #FF8F33;
  background-color: #ffffff;
  border: 2px solid #FF8F33;
  border-radius: 25px;
`;