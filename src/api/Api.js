export const getProducts = async () => {
	const response = await fetch('/api/v1/products', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	const data = await response.json();

	return data;
};
