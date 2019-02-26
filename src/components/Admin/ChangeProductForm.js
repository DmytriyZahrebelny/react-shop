import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { FormContainer, Button, Label, SwitchContainer } from '../../style/AdminStyle/AddProductStyle';
import TexteriaField from './TexteriaField';
import ErrorField from './ErrorField';
import RadioInput from './RadioInput';

class ChangeProductForm extends Component {
  componentDidMount() {
    const { match, getProductId } = this.props;

    getProductId(match.params.id);
  }

  render () {
    const { handleSubmit, getActiveButton, getProducts, match } = this.props;

    const [ currentProduct ] = getProducts.filter(product => product.id === match.params.id);

    return (
      <FormContainer>
        <form id="data" onSubmit={handleSubmit} >
          <Field
            name="title"
            component={ErrorField}
            type="text"
            placeholder="Product title"
            value={currentProduct.title}
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

const mapStateToProps = state => {
  return {
    getProducts: state.productsReducer.products,
    getActiveButton: state.adminReducer.activeButton.type,
  };
};

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'change',
})(ChangeProductForm)));
