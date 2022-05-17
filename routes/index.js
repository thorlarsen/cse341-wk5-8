// Default router file - routes get directed through here

const routes = require('express').Router();

routes.use('/', require('./home'));

module.exports = routes;