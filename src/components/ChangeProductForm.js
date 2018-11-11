import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FieldsContainer, CurrentValue, ItemParam, TextareaField, Fieldset, TextField, Legend, Input } from '../style/AdminStyle/ChangeProductFormStyle';
import * as actions from '../modules/Admin/adminActions';

function changeProductData(products, productId, nameField, newParam) {
  const newData = products.map((product) => {
    if (product.id === productId) {
      product[nameField] = newParam;
    }
    
    return product;
  })

  return newData;
}

class ChangeProductForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(evt) {
    const { product, products, changeData } = this.props;
    evt.preventDefault();

    if (evt.target.title.value) {
      changeData(changeProductData(products, product.id, evt.target.title.name, evt.target.title.value));
      evt.target.title.value = '';
    } else if (evt.target.description.value) {
      changeData(changeProductData(products, product.id, evt.target.description.name, evt.target.description.value));
      evt.target.description.value = '';
    } else if (evt.target.price.value) {
      changeData(changeProductData(products, product.id, evt.target.price.name, evt.target.price.value));
      evt.target.price.value = '';
    }
  };

  render() {
    const { product } = this.props;
    return (
      <FieldsContainer>
        <form onSubmit={this.onChangeTitle} action="">

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

        </form>
      </FieldsContainer>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, { changeData: actions.changeProduct })(ChangeProductForm);