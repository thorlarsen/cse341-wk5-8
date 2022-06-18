// Default router file - routes get directed through here
const express = require('express');
//const app = express();
const routes = express.Router();
const createError = require('http-errors');
require('dotenv').config();
const { auth, requiresAuth } = require('express-openid-connect');


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

routes.use(auth(config));

// Valid routes
routes.use('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Task Manager Logged in' : 'Task Manager Logged out');
}); 

routes.use('/cards', require('./cards'));
routes.use('/comments', require('./comments'));
routes.use('/users', require('./users'));
routes.use('/api-docs', require('./api-docs'));

// For invalid paths return an http 404 error
routes.use((_req, _res, next) => {
  next(createError(404, "404: Path not found"))
});

module.exports = routes;