import * as constants from './adminConstants';

export const activeButton = payload => ({
  type: constants.GET_RADIO_BUTTON_VALUE,
  payload,
});

export const isAdmin = payload => ({
  type: constants.IS_ADMIN,
  payload,
});