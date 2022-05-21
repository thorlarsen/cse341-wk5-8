// Routes for handling cards

const express = require('express');
const route = express.Router();

const cardController = require('../controllers/cards');

route.post('/', cardController.create);

route.get('/', cardController.getAll);

module.exports = route;