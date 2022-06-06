const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    required: [true, "Comment is required"]
  },
  cardId: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    match: [/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "Please enter date: yyyy-mm-dd"],
    default: Date.now()
  },
  isEdited: {
    type: Boolean,
    default: false
  },
  dateEdited: {
    type: Date,
    match: [/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "Please enter date: yyyy-mm-dd"],
  }
});

module.exports = mongoose.model('comments', commentSchema);