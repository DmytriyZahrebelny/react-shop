import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 600px;
  margin: 40px auto 0 auto;
`;

export const DescriptionsField = styled.textarea`
  width: 562px;
  height: 80px;
  font-size: 18px;
`;

export const FieldText = styled.input`
  width: 100%;
  padding: 12px 10px;
  margin-bottom: 30px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: block;
  width: 200px;
  margin: 10px auto 0;
  padding: 12px;
  font-size: 18px;
  color: #FF8F33;
  background-color: #ffffff;
  border: 2px solid #FF8F33;
  border-radius: 25px;
`;

export const Label = styled.label`
  position: relative;
  font-size: 18px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 0 auto 28px;
`;

export const InputRadio = styled.input`
  position: relative;
  /* width: 0;
  height: 0;

  &:after {
    position: absolute;
    content: "";
    left: -27px;
    top: -25px;
    width: 35px;
    height: 35px;
    background-color: #fff;
    border: 2px solid #e5e5e5;
    border-radius: 50%;
  }

  :checked + &:before {
    position: absolute;
    content: "";
    left: 12px;
    top: 7px;
    z-index: 2;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
  } */
`;
