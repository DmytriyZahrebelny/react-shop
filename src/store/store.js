import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/rootModule';

const store = createStore(rootModule, applyMiddleware(reduxThunk));

export default store;
