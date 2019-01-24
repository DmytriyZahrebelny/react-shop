import { combineReducers } from 'redux';
import productsReducer from './Products/productsReducer';
import cartReducer from './Cart/cartReducer';
import headerReducer from './Header/headerReducer';
import adminReducer from './Admin/adminReducer';
import { connectRouter } from 'connected-react-router'
import {reducer as form} from 'redux-form';

export default (history) => combineReducers ({
  router: connectRouter(history),
  form,
  headerReducer,
  adminReducer,
  productsReducer,
  cartReducer,
});