// Model for the project manager comments

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: String,
  cardId: String
});

module.exports = mongoose.model('comments', commentSchema);
