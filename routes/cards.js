// Router for handling cards

const { Router } = require('express');
const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cards');

router.post('/', cardController.createCard);

    /*
      #swagger.description = 'Create a new card and add it to the collection'
    */

router.get('/', cardController.getAllCards);

router.get('/:id', cardController.getCardById);

router.put('/:id', cardController.updateCardById);

router.delete('/:id', cardController.deleteCardById);

module.exports = router;