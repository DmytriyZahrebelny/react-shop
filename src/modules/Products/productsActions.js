import * as constants from './productsConstants';

export const fetchProducts = payload => ({
  type: constants.FETCH_PRODUCTS,
  payload,
});

