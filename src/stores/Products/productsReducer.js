import * as constants from './productsConstants';
import * as adminConstants from '../Admin/adminConstants';

const initialState = {
	products: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case constants.FETCH_PRODUCTS:
			return { products: action.payload };
		case adminConstants.ADD_PRODUCT:
			return { products: [...state.products, action.payload] };
		case adminConstants.DELETE_PRODUCT:
			return { products: action.payload };
		case adminConstants.CHANGE_PRODUCT:
			return { products: action.payload };

		default:
			return state;
	}
}
