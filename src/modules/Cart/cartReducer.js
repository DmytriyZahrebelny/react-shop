import * as constants from './cartConstants';

const initialState = {
  allProducts: [],
  productsId: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_STATE:
      return Object.assign({}, state, {
        allProducts: action.payload,
        productsId: [...state.productsId],
      })
    case constants.ADD_PRODUCT:
      return Object.assign({}, state, {
        allProducts: state.allProducts,
        productsId: [...state.productsId, action.payload],
      });

    default:
      return state;
  }
}