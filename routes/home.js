/* 
  The route for the root path is redirected to /api-docs. 
*/

const routes = require('express').Router();

routes.get('/', (_req, res) => {
  res.status(307).redirect('/api-docs');
/*
  #swagger.description = "Redirects to /api-docs"
*/
}); 



module.exports = routes;