// Default router file - routes get directed through here

const routes = require('express').Router();
const createError = require('http-errors');

// Valid routes
routes.use('/', require('./home'));
routes.use('/cards', require('./cards'));
routes.use('/comments', require('./comments'));
routes.use('/users', require('./users'));
routes.use('/api-docs', require('./api-docs'));

// For invalid paths return an http 404 error
routes.use((req, res, next) => {
  next(createError(404, "404: Path not found"))
});

module.exports = routes;