const db = require('../models');
const Comment = db.comments;

exports.createComment = (req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
    /*
      #swagger.description = 'Create a new comment and add it to the collection'
    */
};