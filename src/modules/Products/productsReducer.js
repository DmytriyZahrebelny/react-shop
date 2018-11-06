import * as constants from './productsConstants';

const initialState = {
  products: [],
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PRODUCTS:
      return {
        products: action.payload,
      };

    default:
      return state;
  }
}