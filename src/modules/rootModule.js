import { combineReducers } from 'redux';
import productsReducer from './Products/productsReducer';
import cartReducer from './Cart/cartReducer';

export default combineReducers ({
  productsReducer,
  cartReducer,
});