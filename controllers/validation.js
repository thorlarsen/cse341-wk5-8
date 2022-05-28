const {check, validationResult } = require('express-validator');

exports.commentValidation = [
  check('comment', 'Please supply a comment string').not().isEmpty(),
  check('cardId', 'Please provide a cardId').not().isEmpty(),
  check('user', 'The user IS is required').not().isEmpty(),
  check('dateAdded', 'Please provide a date added').isDate()
];

exports.validationResult = validationResult;