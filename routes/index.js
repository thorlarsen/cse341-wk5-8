// Default router file - routes get directed through here

const routes = require('express').Router();

routes.use('/', require('./home'));
routes.use('/cards', require('./cards'));
routes.use('/comments', require('./comments'));
routes.use('/users', require('./users'));
routes.use('/api-docs', require('./api-docs'));

module.exports = routes;