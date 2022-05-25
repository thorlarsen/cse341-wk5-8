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
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
  assignedTo: String,
  isDone: Boolean,
  isBlocked: Boolean,
});

db.cards = mongoose.model('cards', cardSchema);

const commentSchema = new Schema({
  comment: String,
  cardId: String,
  user: String,
  dateAdded: Date,
  dateModified: Date
});

db.comments = mongoose.model('comments', commentSchema);

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
  });

db.users = mongoose.model('users', userSchema);

module.exports = db;