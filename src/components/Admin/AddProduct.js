import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormContainer, Button, Label, SwitchContainer } from '../../style/AdminStyle/AddProductStyle';
import TexteriaField from './TexteriaField';
import ErrorField from './ErrorField';
import RadioInput from './RadioInput';
import * as actions from '../../modules/Admin/adminActions';

class AddProduct extends Component {
  isChecked = (evt) => {
    const { activeButton } = this.props;

    activeButton(evt.target.value);
  }
  
  
  render () {
    const { handleSubmit, getActiveButton } = this.props;

    return (
      <FormContainer>
        <form id="data" onSubmit={handleSubmit} >
          <Field
            name="title"
            component={ErrorField}
            type="text"
            placeholder="Product title"
          />
          <SwitchContainer>
            <Label htmlFor="mobile">Mobile</Label>
            <Field id="mobile" name="type" component={RadioInput} activeButton={getActiveButton} type="radio" value="mobile" onChange={this.isChecked}/>
            <Label htmlFor="tablet">Tablet</Label>
            <Field id="tablet" name="type" component={RadioInput} activeButton={getActiveButton} type="radio" value="tablet" onChange={this.isChecked}/>
            <Label htmlFor="desktop">Desktop</Label>
            <Field id="desktop" name="type" component={RadioInput} activeButton={getActiveButton} type="radio" value="desktop" onChange={this.isChecked}/>
          </SwitchContainer>
          <Field
            name="image"
            component={ErrorField}
            type="text"
            placeholder="Image url"
          />
          <Field
            name="price"
            component={ErrorField}
            type="text"
            placeholder="Price"
          />
          <Field
            name="description"
            component={TexteriaField}
            placeholder="Product description"
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    );
  }
}

const validate = ({ title, image, price, description }) => {
  const errors = {};

  if(!price) errors.price = 'Price is required';

  if(!description) errors.description = 'Description is required';

  if(!title) errors.title = 'Title is required';

  if(!image) errors.image = 'Image url is required';

  return errors;
};

const mapStateToProps = state => {
  return {
    getActiveButton: state.adminReducer.activeButton.type,
  };
};

export default connect(mapStateToProps, {
  activeButton: actions.activeButton,
})(reduxForm({
  form: 'add',
  validate,
})(AddProduct));
