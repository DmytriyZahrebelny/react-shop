import { createSelector } from 'reselect';

const getAdminReducer = state => state.adminReducer;
const getCartReducer = state => state.cartReducer;

export const adminSelector = createSelector(getAdminReducer, ({ isAdmin }) => {
  return isAdmin;
});

export const cartSelector = createSelector(getCartReducer, ({ productsId }) => {
  return productsId;
});