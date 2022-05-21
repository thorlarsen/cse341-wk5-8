// Routes for handling cards
// Once controllers are working, try to move them to controllers folder

const express = require('express');
const route = express.Router();

const cardController = require('../controllers/cards');

route.post('/', cardController.create);

module.exports = route;