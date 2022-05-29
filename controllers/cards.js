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
      res.status(500).send(err.message);
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
      res.status(500).send(err.message);
    });
    /*
      #swagger.description = 'Show all cards in the collection' 
    */
};

exports.getCardById = (req, res) => {
  const cardId = req.params.id;
  Card.findById(cardId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
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
      res.status(500).send(err.message);
    });
};

exports.deleteCardById = (req, res) => {
  const cardId = req.params.id;
  Card.findOneAndDelete( {_id: cardId} )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
