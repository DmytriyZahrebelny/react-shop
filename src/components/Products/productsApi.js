export const getProducts = async () => {
	const response = await fetch('https://shop-koa-api.herokuapp.com/api/v1/products', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	const data = await response.json();

	return data;
};
