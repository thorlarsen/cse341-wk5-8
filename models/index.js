const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.uri = process.env.MONGODB_URI;
db.cards = require('./cardModel.js');
db.comments = require('./commentModel.js');
db.users = require('./userModel');

/*
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
  startDate: {
    type: Date,
    match: [/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "Please enter date: yyyy-mm-dd"],
    min: [Date.now(), "Start date must be today or later or empty"]
  },
  dueDate: {
    type: Date,
    match: [/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "Please enter date: yyyy-mm-dd"],
    min: [Date.now(), "Due date must be today or later or empty"]
  },
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
/*
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

db.comments = mongoose.model('comments', commentSchema);

/*
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
*/

module.exports = db;