import { useSelector } from 'react-redux';

export const useCartHooks = () => {
	const { products, selectedProduct } = useSelector(state => ({
		products: state.productsReducer,
		selectedProduct: state.cartReducer,
	}));

	const quantityProducts = selectedProduct.productsId.reduce((acc, id) => {
		acc[id] = acc[id] ? acc[id] + 1 : 1;
		return acc;
	}, {});

	const allPrice = products.products.reduce((sum, product) => {
		if (quantityProducts[product.id]) {
			return sum + quantityProducts[product.id] * product.price;
		}
		return sum;
	}, 0);

	return { products, quantityProducts, allPrice };
};
