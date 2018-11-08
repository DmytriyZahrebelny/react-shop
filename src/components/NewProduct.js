import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormContainer, ItemField, DescriptionsField, Fieldset, InputText, InputSubmitAdd, Legend } from '../style/adminStyle';
import * as actions from '../modules/Admin/adminActions';

class NewProduct extends Component {
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
      <form onSubmit={this.addNewProduct} action="">
        <FormContainer>
          <ItemField>
            <Fieldset>
              <Legend>Name product</Legend>
              <InputText type="text" name="title" placeholder="Add title" required />
            </Fieldset>
          </ItemField>
          <ItemField>
            <Fieldset>
              <Legend>Description product</Legend>
              <DescriptionsField name="description" placeholder="Add description" required></DescriptionsField>
            </Fieldset>
          </ItemField>
          <ItemField>
            <Fieldset>
              <Legend>Price product</Legend>
              <InputText type="number" name="price" placeholder="Add price" required />
            </Fieldset>
          </ItemField>
          <ItemField>
            <Fieldset>
              <Legend>Image url product</Legend>
              <InputText type="text" name="url" placeholder="Add url" required />
            </Fieldset>
          </ItemField>
          <ItemField>
            <InputSubmitAdd type="submit" />
          </ItemField>
        </FormContainer>
      </form>
    );
  };
}

export default connect(null, { createProduct: actions.addProduct })(NewProduct);