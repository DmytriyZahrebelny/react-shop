import * as constants from './cartConstats';

export const addState = payload => ({
  type: constants.ADD_STATE,
  payload,
});

export const addProduct = payload => ({
  type: constants.ADD_PRODUCT,
  payload,
});
