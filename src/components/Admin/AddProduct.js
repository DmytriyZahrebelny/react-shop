import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormContainer, DescriptionsField, Fieldset, FieldText, Input, Legend } from '../../style/AdminStyle/AddProductStyle';
import * as actions from '../../modules/Admin/adminActions';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.addNewProduct = this.addNewProduct.bind(this);
  }

  addNewProduct(evt) {
    evt.preventDefault();
    const { createProduct } = this.props;

    createProduct({
      id: '/' + new Date().getTime(),
      title: evt.target.title.value,
      description: evt.target.description.value,
      image: evt.target.url.value,
      price: evt.target.price.value,
    });
  }

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.addNewProduct} action="">
          <Fieldset>
            <Legend>Name product</Legend>
            <FieldText type="text" name="title" placeholder="Add title" required />
          </Fieldset>
          <Fieldset>
            <Legend>Description product</Legend>
            <DescriptionsField name="description" placeholder="Add description" required></DescriptionsField>
          </Fieldset>
          <Fieldset>
            <Legend>Price product</Legend>
            <FieldText type="number" name="price" placeholder="Add price" required />
          </Fieldset>
          <Fieldset>
            <Legend>Image url product</Legend>
            <FieldText type="text" name="url" placeholder="Add url" required />
          </Fieldset>
          <Input type="submit" />
        </form>
      </FormContainer>
    );
  };
}

export default connect(null, { createProduct: actions.addProduct })(AddProduct);