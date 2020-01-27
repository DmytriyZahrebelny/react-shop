import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './Products/productsReducer';
import adminReducer from './Admin/adminReducer';
import headerReducer from './Header/headerReducer';

export const rootReducer = combineReducers({
	productsReducer,
	adminReducer,
	headerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
