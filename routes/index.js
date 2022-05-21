// Default router file - routes get directed through here

const routes = require('express').Router();

routes.use('/', require('./home'));
routes.use('/cards', require('./cards'));

module.exports = routes;