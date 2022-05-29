const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = {
  mongoose: mongoose,
  uri: process.env.MONGODB_URI,
  //cards: require('./cards.js')(mongoose),
  //comments: require('./comments.js')(mongoose)
};

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  startDate: Date,
  dueDate: Date,
  assignedTo: String,
  isDone: {
    type: Boolean,
    default: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  }
});

db.cards = mongoose.model('cards', cardSchema);

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
    default: Date.now()
  },
  isEdited: {
    type: Boolean,
    default: false
  },
  dateEdited: {
    type: Date
  }
});

db.comments = mongoose.model('comments', commentSchema);

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email address is required'],
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
    unique: [true, 'That email address is already is use']
  },
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  }
});

db.users = mongoose.model('users', userSchema);

module.exports = db;