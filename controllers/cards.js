const db = require('../models');
const Card = db.cards;

exports.create = (req, res) => {
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
};

//module.export = create;