export const ADD_STATE = 'admin/ADD_STATE';
export const ADD_PRODUCT = 'admin/ADD_PRODUCT';
export const CHANGE_PRODUCT = 'admin/CHANGE_PRODUCT';
export const DELETE_PRODUCT = 'admin/DELETE_PRODUCT';
const IS_ADMIN = 'admin/IS_ADMIN';

export const addState = payload => ({
	type: ADD_STATE,
	payload,
});

export const addProduct = payload => ({
	type: ADD_PRODUCT,
	payload,
});

export const changeProduct = payload => ({
	type: DELETE_PRODUCT,
	payload,
});

export const deleteProduct = payload => ({
	type: DELETE_PRODUCT,
	payload,
});

export const isAdmin = payload => ({
	type: IS_ADMIN,
	payload,
});

const initialState = {
	isAdmin: false,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case IS_ADMIN:
			return { isAdmin: action.payload };

		default:
			return state;
	}
}
