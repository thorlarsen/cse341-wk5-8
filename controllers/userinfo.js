const db = require('../models');
const User = db.users;

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
    /*
      #swagger.description = 'Create a new user and add it to the users collection'
    */
};

exports.getOneUserByEmail = (req, res) => {
    User.findOne({ email: req.params.email })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
    /*
      #swagger.description = 'Retrieve one user based on email address.'
    */
};

exports.deleteUser = (req, res) => {
  User.findOneAndDelete({ email: req.params.email })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};