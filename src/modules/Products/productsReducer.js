import * as constants from './productsConstants';

const initialState = {
  products: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PRODUCTS:
      return Object.assign({}, {
        products: action.payload,
      });

    default:
      return state;
  }
}