/* 
  The route for the root path is redirected to /api-docs. 
*/

const routes = require('express').Router();

routes.get('/', (req, res) => {
  //res.status(307).redirect('/api-docs');
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
/*
  #swagger.description = "Redirects to /api-docs"
*/
}); 



module.exports = routes;