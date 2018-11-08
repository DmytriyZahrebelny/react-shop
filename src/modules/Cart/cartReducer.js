import * as constants from './cartConstants';

const initialState = {
  allProducts: [],
  addedProductId: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_STATE:
      return Object.assign({}, state, {
        allProducts: action.payload,
        addedProductId: [...state.addedProductId],
      })
    case constants.ADD_PRODUCT:
      return Object.assign({}, state, {
        allProducts: [...state.allProducts],
        addedProductId: [...state.addedProductId, action.payload],
      });

    default:
      return state;
  }
}