import * as constants from './headerConstants';

const initialState = {
  searchProducts: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.SEARCH_PRODUCTS:
      return Object.assign({}, state, {
        searchProducts: action.payload,
      });

    default:
      return state;
  }
}