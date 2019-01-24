import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';

class RegistrationForm extends Component {
  render () {
    const {handleSubmit} = this.props;

    return (
      <LoginFormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          name="firstname"
          component='input'
          type="text"
          placeholder="First Name"
        />
        <TextField
          name="secondname"
          component='input'
          type="text"
          placeholder="Second Name"
        />
        <TextField
          name="email"
          component='input'
          type="text"
          placeholder="Email"
        />
        <TextField
          name="password"
          component='input'
          type="password"
          placeholder="Password"
        />
        <Button type="submit" label="submit">Submit</Button>
      </form>
    </LoginFormContainer>
    );
  }
}

export default reduxForm({
  form: 'registration',
}) (RegistrationForm);

const LoginFormContainer = styled.div`
  width: 100%;
`;

const TextField = styled(Field)`
  display: block;
  box-sizing: border-box;
  width: 460px;
  margin: 30px 20px;
  padding: 12px;
  font-size: 18px;
`;

const Button = styled.button`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 0 auto;
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