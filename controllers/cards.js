const createError = require('http-errors');
const { mongoose } = require('../models');
const db = require('../models');
const Card = db.cards;

exports.createCard = (req, res) => {
  const card = new Card(req.body);
  card
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message || 'There was a problem with updating the database');
    });
    /*
      #swagger.description = 'Create a new card and add it to the collection'
    */
};

exports.getAllCards = (req, res) => {
  Card.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message || 'There was a problem with the database');
    });
    /*
      #swagger.description = 'Show all cards in the collection' 
    */
};

exports.getCardById = (req, res, next) => {
  const cardId = req.params.id;
  Card.findById(cardId)
    .then((data) => {
      if (!data) {
        throw createError(400, 'Card ID not found')
      }
      else res.status(200).send(data);
    })
    .catch((error) => {
      //res.status(501).send(err.message || 'There was a problem with the database');
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Card ID'));
        return;
      }
      next(error);
    });
    /*
      #swagger.description = 'Retrieve one card based on MongoDB _id.'
    */
};

exports.updateCardById = (req, res) => {
  const cardId = req.params.id;
  const updateData = {
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    dueDate: req.body.dueDate,
    assignedTo: req.body.assignedTo,
    isDone: req.body.isDone,
    isBlocked: req.body.isBlocked
  };
  Card.findOneAndReplace( {_id: cardId}, updateData )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(403).send(err.message || 'There was a problem with updating the database');
    });
    /*
      #swagger.description = 'Update one card based on MongoDB _id'
    */
};

exports.deleteCardById = (req, res) => {
  const cardId = req.params.id;
  Card.findOneAndDelete( {_id: cardId} )
    .then((data) => {
      if (!data) {
        throw createError(400, 'Card ID not found')
      }
      else res.send(data);
    })
    .catch((err) => {
      //Keeping the line below in comments until I'm sure my new error handling is working
      //res.status(403).send(err.message || 'There was a problem with updating the database');
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Card ID'));
        return;
      }
      next(error);
    });
    /*
      #swagger.description = 'Delete one card based on MongoDB _id'
    */
};
