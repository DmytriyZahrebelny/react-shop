const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		'/api',
		proxy({
			target: 'https://apiko-api.herokuapp.com',
			changeOrigin: true,
		})
	);
};
