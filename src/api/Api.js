export const getProducts = async () => {
	const response = await fetch('/api/v2/products', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	const data = await response.json();

	return data;
};
