// Routes for handling cards

const express = require('express');
const route = express.Router();

const cardController = require('../controllers/cards');

route.post('/', cardController.create);
// #swagger.description = 'Create a new card and add it to the collection'

route.get('/', cardController.getAll);
// #swagger.description = 'Show all cards in the collection'

module.exports = route;