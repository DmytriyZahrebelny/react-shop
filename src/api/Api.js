const getRequestsProducts = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(res => res.json());
};

const deleteRequestsProducts = (url) => {
  return fetch(url, {
    method: 'DELETE',
  }).then(products => products.json());
};

const postRequestsProducts = (url, values, radioButtonValue) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.assign(values, radioButtonValue)),
  })
  .then(products => products.json());
};

const patchRequestsProducts = (url, values, id) => {
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(Object.assign(values, id)),
  })
  .then(products => products.json());
};

export const productsRequests = {
  getProducts() {
    return getRequestsProducts('https://shop-koa-api.herokuapp.com/api/v1/products');
  },
  deleteProduct(values) {
    return deleteRequestsProducts(`https://shop-koa-api.herokuapp.com/api/v1/delete/${values}`)
  },
  addProducts(values, radioButtonValue) {
    return postRequestsProducts('https://shop-koa-api.herokuapp.com/api/v1/add', values, radioButtonValue)
  },
  changeProducts(values, id) {
    return patchRequestsProducts('https://shop-koa-api.herokuapp.com/api/v1/change', values, id)
  },
};
