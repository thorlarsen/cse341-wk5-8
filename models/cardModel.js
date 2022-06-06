const mongoose = require('mongoose');

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
    min: [Date.now(), "Start date must be today, later than today, or empty"]
  },
  dueDate: {
    type: Date,
    match: [/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "Please enter date: yyyy-mm-dd"],
    min: [Date.now(), "Due date must be today, later than today, or empty"]
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

module.exports = mongoose.model('cards', cardSchema);
