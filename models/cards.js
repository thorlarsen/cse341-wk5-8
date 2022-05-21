// Model for the project manager cards

const mongoose = require('mongoose');

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

module.exports = mongoose.model('cards', cardSchema);