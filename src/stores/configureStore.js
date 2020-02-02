import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsStore from './Products/productsReducer';
import adminReducer from './Admin/adminReducer';
import headerStore from './Header/headerReducer';
import cartStore from './Cart/cartReducer';

export const rootReducer = combineReducers({
	productsStore,
	adminReducer,
	headerStore,
	cartStore,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
