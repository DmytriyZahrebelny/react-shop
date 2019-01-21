import * as constants from './headerConstants';

const initialState = {
  searchProductsWords: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.SEARCH_PRODUCTS:
      return Object.assign({}, state, {
        searchProductsWords: action.payload,
      });

    default:
      return state;
  }
}