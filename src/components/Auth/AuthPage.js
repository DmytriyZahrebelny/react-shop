import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { Auth, Container, LinkBox, LoginLink, RegistrationLink } from '../../style/AuthStyle/AuthStyle';

class AuthPage extends Component {
  constructor() {
    super();

    this.state = {
      activeLink: true,
    }

    this.onLoginLinkClick = this.onLoginLinkClick.bind(this);
    this.onRegistrationLinkClick = this.onRegistrationLinkClick.bind(this);
    this.submit = this.submit.bind(this);
  }

  onLoginLinkClick() {
    this.setState({
      activeLink: true,
    })
  }

  onRegistrationLinkClick() {
    this.setState({
      activeLink: false,
    })
  }

  submit(values){
    console.log(JSON.stringify(values));
  };

  render() {
    return (
      <Auth>
        <Container>
          <LinkBox>
            <LoginLink state={this.state} onClick={this.onLoginLinkClick} to="/auth">Login</LoginLink>
            <RegistrationLink state={this.state} onClick={this.onRegistrationLinkClick} to="/auth/registration">Registration</RegistrationLink>
          </LinkBox>
          <div>
            <Switch>
              <Route exact path="/auth" render={() => <LoginForm onSubmit={this.submit} />} />
              <Route path="/auth/registration" render={() => <RegistrationForm onSubmit={this.submit} />} />
            </Switch>
          </div>
        </Container>
      </Auth>
    );
  }
}

export default AuthPage;

