import React, { Component } from 'react';
import { FormContainer, ItemField, DescriptionsField, Fieldset, InputText, InputSubmit } from '../style/adminSyle';

class NewProduct extends Component {
  constructor(props) {
    super(props);

    this.addNewProduct = this.addNewProduct.bind(this);
  }

  addNewProduct(evt) {
    evt.preventDefault();
    const { createProduct, products } = this.props;

    createProduct({
      id: products.length + 1,
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
              <legend>Name product</legend>
              <InputText type="text" name="title" placeholder="Add title" required />
            </Fieldset>
          </ItemField>
          <ItemField>
            <Fieldset>
              <legend>Description product</legend>
              <DescriptionsField name="description" placeholder="Add description" required></DescriptionsField>
            </Fieldset>
          </ItemField>
          <ItemField>
            <Fieldset>
              <legend>Price product</legend>
              <InputText type="number" name="price" placeholder="Add price" required />
            </Fieldset>
          </ItemField>
          <ItemField>
            <Fieldset>
              <legend>Image url product</legend>
              <InputText type="text" name="url" placeholder="Add url" required />
            </Fieldset>
          </ItemField>
          <ItemField>
            <InputSubmit type="submit" />
          </ItemField>
        </FormContainer>
      </form>
    );
  };
}

export default NewProduct;