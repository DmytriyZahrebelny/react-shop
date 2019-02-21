import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 600px;
  margin: 40px auto 0 auto;
`;

export const DescriptionsField = styled.textarea`
  width: 100%;
  height: 124px;
  padding: 8px 10px;
  font-size: 18px;
  border: 1px solid #000000;
  border-radius: 10px;
  box-sizing: border-box;
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
  margin: 30px auto 0;
  padding: 12px;
  font-size: 18px;
  color: #FB4128;
  background-color: #ffffff;
  border: 2px solid #FB4128;
  border-radius: 25px;

  :hover {
    color: #ffffff;
    background-color: #FF5122;
  }
`;

export const Label = styled.label`
  display: block;
  position: relative;
  font-size: 18px;
  padding: 10px 55px 8px 0;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 0 auto 28px;
`;

export const InputRadio = styled.input`
 position: relative;
  width: 0;
  height: 0;

  &:after {
    position: absolute;
    content: "";
    left: -63px;
    top: -4px;
    width: 35px;
    height: 35px;
    background-color: #fff;
    border: 2px solid ${props => props.checked ? '#FF5122' : '#e5e5e5'};;
    border-radius: 50%;
  }

  &:before {
    position: absolute;
    content: "";
    left: -51px;
    top: 8px;
    z-index: 2;
    width: 15px;
    height: 15px;
    background-color: ${props => props.checked ? '#FF5122' : '#ffffff'};
    border-radius: 50%;
  }
`;
