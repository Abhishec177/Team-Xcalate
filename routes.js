const routes = require('next-routes')()

console.log('in routes');

routes
    .add('/home/market','/home/market');
    //add other routes


module.exports = routes;