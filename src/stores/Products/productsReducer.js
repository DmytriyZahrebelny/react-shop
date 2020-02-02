import * as constants from './productsConstants';
import * as adminConstants from '../Admin/adminConstants';

const initialState = [];

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case constants.FETCH_PRODUCTS:
			return action.payload;
		case adminConstants.ADD_PRODUCT:
			return [...state.products, action.payload];
		case adminConstants.DELETE_PRODUCT:
			return action.payload;
		case adminConstants.CHANGE_PRODUCT:
			return action.payload;

		default:
			return state;
	}
}
