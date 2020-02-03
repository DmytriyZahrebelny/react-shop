import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchProducts } from '../../stores/Header/headerActions';

export const useHeaderHooks = () => {
	const history = useHistory();
	const productsNumber = useSelector(state => state.cartStore.productsId);
	const dispatch = useDispatch();

	const getWords = evt => {
		evt.preventDefault();

		if (history.location.pathname !== '/search') {
			history.push('/search');
			return dispatch(searchProducts(evt.target.search.value));
		}

		return dispatch(searchProducts(evt.target.search.value));
	};

	return { productsNumber, getWords };
};
