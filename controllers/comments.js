const res = require('express/lib/response');
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
      res.status(403).send(err.message || 'There was a problem with updating the database');
    });
    /*
      #swagger.description = 'Create a new comment and add it to the collection'
    */
};

exports.getAllCommentsByCardId = (req, res) => {
  const _cardId = req.params.cid;
  Comment.find({cardId: _cardId})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message || 'There was a problem with the database');
    });
    /*
      #swagger.description = 'Show all comments in the collection matching a specific cardId'
    */
};

exports.updateCommentById = (req, res) => {
  Comment.findOneAndUpdate( {_id: req.params.id}, {
    comment: req.body.comment,
    dateModified: req.body.comment || date.now()
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(403).send(err.message || 'There was a problem with updating the database');
    })
    /*
      #swagger.description = 'Find one comment by _id and update it.'
    */
};

exports.deleteComment = (req, res) => {
  Comment.findOneAndDelete( {_id: req.params.id} )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(403).send(err.message || 'There was a problem with updating the database');
    });
    /*
      #swagger.description = 'Find one comment by _id and delete it.'
    */
};