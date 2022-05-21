// Model for the project manager cards

const mongoose = require('mongoose');

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

module.exports = mongoose.model('cards', cardSchema);