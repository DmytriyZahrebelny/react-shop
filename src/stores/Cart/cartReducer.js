import * as constants from './cartConstants';

const initialState = {
	productsId: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case constants.ADD_PRODUCT:
			return { ...state, productsId: [...state.productsId, action.payload] };

		default:
			return state;
	}
}
