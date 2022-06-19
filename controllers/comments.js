const createError = require('http-errors');
const { mongoose } = require('../models');
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
      #swagger.parameters['obj'] = {
        name: 'Example',
        in: 'body',
        description: 'Comments fields',
        schema: {
          $comment: 'Comment string',
          $cardID: '_id of card to add comment to',
          $user: 'Name of user adding card',
          dateAdded: 'yyyy-mm-dd',
          isEdited: false,
          dateEdited: 'yyyy-mm-dd'
        }
      }
    */
};

exports.getAllCommentsByCardId = (req, res, next) => {
  const _cardId = req.params.cid;
  Comment.find({cardId: _cardId})
    .then((data) => {
      if (data = []) {
        throw createError(400, 'Card ID not found')
      }
      else res.status(200).send(data);
    })
    .catch((error) => {
      //res.status(500).send(err.message || 'There was a problem with the database');
      /* if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Card ID'));
        return;
      } */
      next(error);
    });
    /*
      #swagger.description = 'Show all comments in the collection matching a specific cardId'
    */
};

exports.updateCommentById = (req, res, next) => {
  Comment.findOneAndUpdate( {_id: req.params.id}, {
    comment: req.body.comment,
    dateModified: req.body.comment || date.now()
  })
    .then((data) => {
      if (!data) {
        throw createError(400, 'Card ID not found')
      }
      else res.status(200).send(data);
    })
    .catch((error) => {
      //res.status(403).send(err.message || 'There was a problem with updating the database');
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Card ID'));
        return;
      }
      next(error);
    });
    /*
      #swagger.description = 'Find one comment by _id and update it.'
      #swagger.parameters['obj'] = {
        name: 'Example',
        in: 'body',
        description: 'Comments fields',
        schema: {
          comment: 'Comment string',
          cardID: '_id of card to add comment to',
          user: 'Name of user adding card',
          dateAdded: 'yyyy-mm-dd',
          isEdited: false,
          dateEdited: 'yyyy-mm-dd'
        }
      }
    */
};

exports.deleteComment = (req, res, next) => {
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