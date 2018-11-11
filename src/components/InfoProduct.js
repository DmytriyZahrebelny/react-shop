import React from 'react';
import { connect } from 'react-redux';
import { Product, ProductTitle, ProductDescription, Button, ProductPrice } from '../style/ShopStyle/InfoProductStyle';

const InfoProduct = ({ products, location }) => {
  const idProduct = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  const currentProduct = products.filter((product) => {
    return product.id === idProduct;
  });

  return (
    <Product>
      <div>
        <img src={currentProduct[0].image} alt={currentProduct[0].id} />
        <ProductPrice>
          {`Price:${currentProduct[0].price}$`}
        </ProductPrice>
      </div>
      <div>
        <ProductTitle>
          {currentProduct[0].title}
        </ProductTitle>
        <ProductDescription>
          {currentProduct[0].description}
        </ProductDescription>
        <Button to='#'>Add to Cart</Button>
      </div>
    </Product>
  );
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps)(InfoProduct);
