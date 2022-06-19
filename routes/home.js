/* 
  The route for the root path shows logged in or logged out 
*/

const routes = require('express').Router();

routes.get('/', (req, res) => {
  //res.status(307).redirect('/api-docs');
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
/*
  #swagger.description = "Shows login and logout status"
*/

}); 



module.exports = routes;