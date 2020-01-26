import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './Products/productsReducer';
import adminReducer from './Admin/adminReducer';

export const rootReducer = combineReducers({
	productsReducer,
	adminReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
