// Default router file - routes get directed through here
const express = require('express');
//const app = express();
const routes = express.Router();
const createError = require('http-errors');
const { isAuthenticated } = require('express-openid-connect');

require('../middleware/auth').authent;

// Valid routes
//routes.use('/', (req, res) => {
//  res.send(req.oidc.isAuthenticated ? 'Task Manager Logged in' : 'Task Manager Logged out');
//}); 
routes.use('/', require('./home'));
routes.use('/cards', require('./cards'));
routes.use('/comments', require('./comments'));
routes.use('/users', require('./users'));
routes.use('/api-docs', require('./api-docs'));

// For invalid paths return an http 404 error
routes.use((_req, _res, next) => {
  next(createError(404, "404: Path not found"))
});

module.exports = routes;