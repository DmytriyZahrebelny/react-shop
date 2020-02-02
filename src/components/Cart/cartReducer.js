export const cartConstatns = {
	QUANTITY_PRODUCTS: 'QUANTITY_PRODUCTS',
	ALL_PRICE: 'ALL_PRICE',
};

export const initialState = {
	quantityProducts: [],
	allPrice: 0,
};

export const cartStore = (state = initialState, action) => {
	switch (action.type) {
		case cartConstatns.QUANTITY_PRODUCTS:
			return action;
		case cartConstatns.ALL_PRICE:
			return action;
		default:
			return state;
	}
};
