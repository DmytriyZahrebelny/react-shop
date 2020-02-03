import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsStore from './Products/productsStore';
import adminReducer from './Admin/adminStore';
import headerStore from './Header/headerStore';
import cartStore from './Cart/cartStore';

export const rootReducer = combineReducers({
	productsStore,
	adminReducer,
	headerStore,
	cartStore,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
