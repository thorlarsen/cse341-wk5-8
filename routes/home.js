/* 
  The route for the root path will likely be redirected to
  /api-docs. For now, it will be redirected to /cards and
  display all the cards.
*/

const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.redirect('/cards');
  /*
   #swagger.deprecated = true
   #swagger.description = 'This will be changed soon. Use GET /cards instead.'
  */
}); 

module.exports = routes;