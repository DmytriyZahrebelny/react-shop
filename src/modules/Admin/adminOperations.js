import * as productsActions from '../Products/productsActions';
import * as Api from '../../api/Api';

export const fetchDeleteProducts = (values) => async (dispatch) => {
  try {
    const res = await Api.productsRequests.deleteProduct(values);

    dispatch(productsActions.fetchProducts(res));
  } catch(err) {
    console.log(err);
  }
}

export const fetchPostProducts = (values, radioButtonValue) => async (dispatch) => {
  try {
    const res = await Api.productsRequests.addProducts(values, radioButtonValue);

    dispatch(productsActions.fetchProducts(res));
  } catch(err) {
    console.log(err);
  }
}

export const fetchPatchProducts = (values, id) => async (dispatch) => {
  try {
    const res = await Api.productsRequests.changeProducts(values, id);

    dispatch(productsActions.fetchProducts(res));
  } catch(err) {
    console.log(err);
  }
}
