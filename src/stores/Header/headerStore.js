const SEARCH_PRODUCTS = 'header/SEARCH_PRODUCTS';

export const searchProducts = payload => {
	return {
		type: SEARCH_PRODUCTS,
		payload,
	};
};

const initialState = {
	searchProductsWords: '',
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_PRODUCTS:
			return { ...state, searchProductsWords: action.payload };

		default:
			return state;
	}
}
