import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListField, ItemField, CurrentValue, ItemParam, TextareaField, Fieldset, InputText, Legend, InputSubmitChange } from '../style/adminStyle';
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
      <form onSubmit={this.onChangeTitle} action="">
        <ListField>
          <ItemField>
            <ItemParam>Product name :</ItemParam>
            <CurrentValue>{product.title}</CurrentValue>
            <Fieldset>
              <Legend>Change product title</Legend>
              <InputText type="text" name="title" placeholder="New title" />
              <InputSubmitChange type="submit" />
            </Fieldset>
          </ItemField>
          <ItemField>
            <ItemParam>Product description :</ItemParam>
            <CurrentValue>{product.description}</CurrentValue>
            <Fieldset>
              <Legend>Change product description</Legend>
              <TextareaField name="description" placeholder="New description"></TextareaField>
              <InputSubmitChange type="submit" />
            </Fieldset>
          </ItemField>
          <ItemField>
            <ItemParam>Product price :</ItemParam>
            <CurrentValue>{product.price}</CurrentValue>
            <Fieldset>
              <Legend>Change product price</Legend>
              <InputText type="number" name="price" placeholder="New price" />
              <InputSubmitChange type="submit" />
            </Fieldset>
          </ItemField>
          <ItemField>
            <img src={product.image}  alt={product.image}/>
          </ItemField>
        </ListField>
      </form>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, { changeData: actions.changeProduct })(ChangeProductForm);