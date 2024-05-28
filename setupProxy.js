const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api-site',
        createProxyMiddleware({
            target: 'https://panel.promo.develop-ogr.ru',
            changeOrigin: true,
            secure: false
        })
    );
};