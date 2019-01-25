const ApiUrl = "";

const _request = ( url, body, params={} ) => {
  let headers = {
    'Content-type': 'application/json',
  }

  return fetch(`${url}`, {
    method: 'GET',
    headers,
    body: typeof body !== undefined ? JSON.stringify(body) : {},
    ...params,
  }).then(res => res.json());
};

export const AdminProducts = {
  fetchProducts() {
    return _request(`${ApiUrl}/api/v2/products`);
  },
};