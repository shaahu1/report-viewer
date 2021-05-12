const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/cashiers', 
        {
            target : 'https://reportviewer1.herokuapp.com',
            changeOrigin :true
        })
    );
};