import * as constants from './cartConstants';

export const addProduct = payload => ({
  type: constants.ADD_PRODUCT,
  payload,
});
