import * as constants from './adminConstants';

const initialState = {
  isAdmin: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.IS_ADMIN:
      return Object.assign({}, {
        isAdmin: action.payload,
      });

    default:
      return state;
  }
}
