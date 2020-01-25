const getProducts = (url, body, params = {}) => {
	const headers = {
		'Content-type': 'application/json',
	};

	return fetch(`${url}`, {
		method: 'GET',
		headers,
		body: JSON.stringify(body),
		...params,
	}).then(res => res.json());
};

export const AdminProducts = {
	fetchProducts() {
		return getProducts('/api/v2/products');
	},
};
