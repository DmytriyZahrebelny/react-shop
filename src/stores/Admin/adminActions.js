import * as constants from './adminConstants';

export const addState = payload => ({
	type: constants.ADD_STATE,
	payload,
});

export const addProduct = payload => ({
	type: constants.ADD_PRODUCT,
	payload,
});

export const changeProduct = payload => ({
	type: constants.DELETE_PRODUCT,
	payload,
});

export const deleteProduct = payload => ({
	type: constants.DELETE_PRODUCT,
	payload,
});

export const isAdmin = payload => ({
	type: constants.IS_ADMIN,
	payload,
});
