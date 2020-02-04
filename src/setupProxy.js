const proxy = require('http-proxy-middleware');

module.exports = app => {
	app.use(
		'/api',
		proxy({
			target: 'https://shop-koa-api.herokuapp.com/',
			changeOrigin: true,
		})
	);
};
