import styled from 'styled-components';

export const FieldsContainer = styled.div`
  position: fixed;
  content: "";
  width: 100%;
  height: 800px;
  left: 0;
  top: 0px;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.8)
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

export const Form = styled.div`
  width: 600px;
  height: 800px;
  margin: 50px auto 0;
`;
