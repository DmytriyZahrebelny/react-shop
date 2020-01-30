import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './Products/productsReducer';
import adminReducer from './Admin/adminReducer';
import headerReducer from './Header/headerReducer';
import cartReducer from './Cart/cartReducer';

export const rootReducer = combineReducers({
	productsReducer,
	adminReducer,
	headerReducer,
	cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
