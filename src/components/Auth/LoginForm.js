import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { func } from 'prop-types';
import ErrorField from './ErrorField';
import { FormContainer, Button } from '../../style/AuthStyle/AuthStyle';

class LoginForm extends Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            component={ErrorField}
            type="text"
            placeholder="Username"
          />
          <Field
            name="password"
            component={ErrorField}
            type="password"
            placeholder="Password"
          />
          <Button type="submit" label="submit">Submit</Button>
        </form>
      </FormContainer>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
};

const validate = ({ username, password }) => {
  const errors = {};

  if(!username) errors.username = 'Name is required';

  if(!password) errors.password = 'Password is required';
  else if(password.length < 8) errors.password = 'Invalid passwords';

  return errors;
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
