let _token = null;

export const setToken = (token) => {
  _token = token;
};

const _request = ( url, body, params={} ) => {
  let headers = {
    'Content-type': 'application/json',
  }

  if (_token) {
    headers.Authorization = `Bearer ${_token}`;
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
    return _request(`/api/v1/products`);
  },
};