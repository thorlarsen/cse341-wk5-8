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
  startDate: String,
  dueDate: String,
  assignedTo: String,
  isDone: String,
  isBlocked: String,
});

db.cards = mongoose.model('cards', cardSchema);

module.exports = db;