/* 
  The route for the root path will probably be redirected. 
  For now we'll just post a friendly message confirming 
  the route is working.  
*/

const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('This is home');
}); 

module.exports = routes;