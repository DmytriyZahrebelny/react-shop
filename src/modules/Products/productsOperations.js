import * as productsActions from './productsActions';
import * as Api from '../../api/Api';

export const fetchGetProducts = () => async (dispatch) => {
  try {
    const res = await Api.productsRequests.getProducts();

    dispatch(productsActions.fetchProducts(res));
  } catch(err) {
    console.log(err);
  }
}