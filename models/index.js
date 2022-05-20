const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = {
  mongoose: mongoose,
  uri: process.env.MONGODB_URI,
  /* 
  *** Remove comments after each model is finished ***
  cards: require('./cards.js')(mongoose),
  comments: require('./comments.js')(mongoose)
  */
};

module.exports = db;