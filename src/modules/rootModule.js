import { combineReducers } from 'redux';
import productsReducer from './Products/productsReducer';
import cartReducer from './Cart/cartReducer';
import headerReducer from './Header/headerReducer';
import adminReducer from './Admin/adminReducer';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers ({
  router: connectRouter(history),
  headerReducer,
  adminReducer,
  productsReducer,
  cartReducer,
});