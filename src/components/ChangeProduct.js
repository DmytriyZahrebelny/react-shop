import React, { Component } from 'react';
import { ListField, ItemField, CurrentValue, ItemParam, TextareaField, Fieldset, InputText, InputSubmit } from '../style/adminSyle';

class ChangeProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(evt) {
    const { product, createNewData } = this.props;
    evt.preventDefault();

    if (evt.target.title.value) {
      createNewData(product.id, evt.target.title.name, evt.target.title.value);
      evt.target.title.value = '';
    } else if (evt.target.description.value) {
      createNewData(product.id, evt.target.description.name, evt.target.description.value);
      evt.target.description.value = '';
    } else if (evt.target.price.value) {
      createNewData(product.id, evt.target.price.name, evt.target.price.value);
      evt.target.price.value = '';
    }
  };

  render() {
    const { product } = this.props;
    return (
      <form onSubmit={this.onChangeTitle} action="">
        <ListField>
          <ItemField>
            <ItemParam>Product name :</ItemParam>
            <CurrentValue>{product.title}</CurrentValue>
            <Fieldset>
              <legend>Change product title</legend>
              <InputText type="text" name="title" placeholder="New title" />
              <InputSubmit type="submit" />
            </Fieldset>
          </ItemField>
          <ItemField>
            <ItemParam>Product description :</ItemParam>
            <CurrentValue>{product.description}</CurrentValue>
            <Fieldset>
              <legend>Change product description</legend>
              <TextareaField name="description" placeholder="New description"></TextareaField>
              <InputSubmit type="submit" />
            </Fieldset>
          </ItemField>
          <ItemField>
            <ItemParam>Product price :</ItemParam>
            <CurrentValue>{product.price}</CurrentValue>
            <Fieldset>
              <legend>Change product price</legend>
              <InputText type="number" name="price" placeholder="New price" />
              <InputSubmit type="submit" />
            </Fieldset>
          </ItemField>
          <ItemField>
            <img src={product.image} />
          </ItemField>
        </ListField>
      </form>
    );
  }
}

export default ChangeProduct;
