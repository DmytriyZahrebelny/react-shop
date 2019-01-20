import * as constants from './headerConstants';

export const searchProducts = payload => {
  return {
    type: constants.SEARCH_PRODUCTS,
    payload,
  }
};
