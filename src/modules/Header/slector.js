import { createSelector } from 'reselect';

const isSearched = searchTerm => {
  return item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

export const searchProductsSelector = createSelector(
  [
    state => state.productsReducer.products,
    state => state.headerReducer.searchProductsWords
  ],
  (products, searchProductsWords) =>
    products.filter(isSearched(searchProductsWords))
);
