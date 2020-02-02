import { createSelector } from 'reselect';

const isSearched = searchTerm => {
	return item => {
		return item.title.toLowerCase().includes(searchTerm.toLowerCase());
	};
};

export const searchProductsSelector = createSelector(
	[state => state.productsStore, state => state.headerStore.searchProductsWords],
	(products, searchProductsWords) => products.filter(isSearched(searchProductsWords))
);
