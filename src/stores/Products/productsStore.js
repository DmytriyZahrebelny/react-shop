import * as adminConstants from '../Admin/adminStore';
import * as Api from '../../components/Products/productsApi';

const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS';

export const fetchProducts = payload => ({
	type: FETCH_PRODUCTS,
	payload,
});

export const getProducts = () => async dispatch => {
	try {
		const res = await Api.getProducts();

		dispatch(fetchProducts(res));
	} catch (err) {
		console.log(err);
	}
};

const initialState = [];

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
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
