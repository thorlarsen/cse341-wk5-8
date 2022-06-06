const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('users', userSchema);