import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class Auth extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  submit(values){
    console.log(JSON.stringify(values));
  };

  render() {
    return (
      <AuthContainer>
        <Form>
          <LinkBox>
            <AuthLink to="/auth">Login</AuthLink>
            <AuthLink to="/auth/registration">Registration</AuthLink>
          </LinkBox>
          <Switch>
            <Route exact path="/auth"
              render={
                () => <LoginForm onSubmit={this.submit} />
              }
            />
            <Route path="/auth/registration"
              render={
                () => <RegistrationForm onSubmit={this.submit} />
              }
            />
          </Switch>
        </Form>
      </AuthContainer>
    );
  }
}

export default Auth;

const AuthContainer = styled.div`
  width: 1200px;
  min-height: 800px;
  margin: 0 auto;
  padding-top: 100px;
  background-color: #ffffff;
`;

const Form = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-bottom: 20px;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
  border-bottom: 1px solid #FF5122;
  box-shadow: none;
`;

const AuthLink = styled(Link)`
  display: block;
  padding: 20px 20px;
  font-size: 18px;
  text-decoration: none;
  color: #FF5122;
`;
