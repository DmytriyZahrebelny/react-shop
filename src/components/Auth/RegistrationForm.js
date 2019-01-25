import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import emailValidator from 'email-validator';
import ErrorField from './ErrorField'
import { FormContainer, Button } from '../../style/AuthStyle/AuthStyle';

class RegistrationForm extends Component {
  render () {
    const {handleSubmit} = this.props;

    return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstname"
            component={ErrorField}
            type="text"
            placeholder="First Name"
          />
          <Field
            name="secondname"
            component={ErrorField}
            type="text"
            placeholder="Second Name"
          />
          <Field
            name="email"
            component={ErrorField}
            type="text"
            placeholder="Email"
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

const validate = ({ email, password, firstname, secondname }) => {
  const errors = {};

  if(!firstname) errors.firstname = 'First name is required';

  if(!secondname) errors.secondname = 'Second name is required';

  if(!email) errors.email = 'Email is required';
  else if(!emailValidator.validate(email)) errors.email = 'Invalid email';

  if(!password) errors.password = 'Password is required';
  else if(password.length < 8) errors.password = 'Invalid passwords';

  return errors;
};

export default reduxForm({
  form: 'registration',
  validate,
})(RegistrationForm);
