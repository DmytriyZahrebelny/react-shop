const ADD_PRODUCT = 'cart/ADD_PRODUCT';

export const addProduct = payload => ({
	type: ADD_PRODUCT,
	payload,
});

const initialState = {
	productsId: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT:
			return { ...state, productsId: [...state.productsId, action.payload] };

		default:
			return state;
	}
}
