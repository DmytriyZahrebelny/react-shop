import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Auth = styled.div`
  width: 1200px;
  min-height: 800px;
  margin: 0 auto;
  padding-top: 100px;
  background-color: #ffffff;
`;

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-bottom: 20px;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
  border-bottom: 1px solid #FF5122;
  box-shadow: none;
`;

export const RegistrationLink = styled(Link)`
  display: block;
  width: 50%;
  padding: 20px 0;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: ${props => props.state.activeLink ? '#FF5122' : '#ffffff'};
  background-color: ${props => props.state.activeLink ? '#ffffff' : '#FF5122'};
  border-bottom: 1px solid #FF5122;
`;

export const LoginLink = styled(Link)`
  display: block;
  width: 50%;
  padding: 20px 0;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: ${props => !props.state.activeLink ? '#FF5122' : '#ffffff'};
  background-color: ${props => !props.state.activeLink ? '#ffffff' : '#FF5122'};
  border-bottom: 1px solid #FF5122;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const Button = styled.button`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 10px auto 0;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #FF8F33;
  background-color: inherit;
  border: 2px solid #FB4128;
  border-radius: 24px;
  cursor: pointer;

  :hover {
    background-color: #FF5122;
    color: #ffffff;
  }
`;

export const TextField = styled.input`
  display: block;
  box-sizing: border-box;
  width: 460px;
  margin: 0 20px;
  padding: 12px;
  font-size: 18px;
`;

export const FieldBox = styled.div`
  height: 80px;
`;

export const ErrorText = styled.span`
  display: block;
  padding: 5px 20px 0;
  color: red;
`;