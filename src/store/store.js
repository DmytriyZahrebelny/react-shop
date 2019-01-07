import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/rootModule';
import history from '../modules/history';

const store = createStore(rootModule(history), compose(applyMiddleware(routerMiddleware(history), reduxThunk)));

export default store;
