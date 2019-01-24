import React, { Component } from 'react';
import { FieldsContainer, CurrentValue, ItemParam, TextareaField, Fieldset, TextField, Legend, Input, Form } from '../../style/AdminStyle/ChangeProductFormStyle';
import history from '../../modules/history';

class ChangeProductForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(evt) {
    evt.preventDefault();
    history.push('/admin/change');
  };

  render() {
    const { match : {match}, products } = this.props;

    const currentProduct = products.filter(product => product.id === match.params.id);
    const [ product ] = currentProduct;

    return (
      <FieldsContainer>
        <form onSubmit={this.onChangeTitle} action="">
          <Form>
            <ItemParam>Product name :</ItemParam>
            <CurrentValue>{product.title}</CurrentValue>
            <Fieldset>
              <Legend>Change product title</Legend>
              <TextField type="text" name="title" placeholder="New title" />
              <Input type="submit" />
            </Fieldset>

            <ItemParam>Product description :</ItemParam>
            <CurrentValue>{product.description}</CurrentValue>
            <Fieldset>
              <Legend>Change product description</Legend>
              <TextareaField name="description" placeholder="New description"></TextareaField>
              <Input type="submit" />
            </Fieldset>

            <ItemParam>Product price :</ItemParam>
            <CurrentValue>{product.price}</CurrentValue>
            <Fieldset>
              <Legend>Change product price</Legend>
              <TextField type="number" name="price" placeholder="New price" />
              <Input type="submit" />
            </Fieldset>
          </Form>
        </form>
      </FieldsContainer>
    );
  }
}

export default ChangeProductForm;