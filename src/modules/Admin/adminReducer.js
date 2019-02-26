import * as constants from './adminConstants';

const initialState = {
  isAdmin: false,
  activeButton: {
    type: 'mobile',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.IS_ADMIN:
      return Object.assign({}, {
        isAdmin: action.payload,
        activeButton: state.activeButton,
      });
    case constants.GET_RADIO_BUTTON_VALUE:
      return Object.assign({}, {
        isAdmin: state.isAdmin,
        activeButton: {
          type: action.payload,
        },
      });

    default:
      return state;
  }
}
