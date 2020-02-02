import * as productsActions from './productsActions';
import * as Api from '../../components/Products/productsApi';

export const fetchProducts = () => async dispatch => {
	try {
		const res = await Api.getProducts();

		dispatch(productsActions.fetchProducts(res));
	} catch (err) {
		console.log(err);
	}
};
