const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = {
  mongoose: mongoose,
  uri: process.env.MONGODB_URI,
  /* 
  *** Once the models are done here consider moving to other files ***
  cards: require('./cards.js')(mongoose),
  comments: require('./comments.js')(mongoose)
  */
};

// Start defining schemas and models
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: String,
  description: String,
  isDone: Boolean,
  dueDate: Date,
  assignedTo: String
});

db.cards = mongoose.model('cards', cardSchema);

const commentSchema = new Schema({
  comment: String,
  cardId: String
});

db.comments = mongoose.model('comments', commentSchema);

module.exports = db;