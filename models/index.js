const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.uri = process.env.MONGODB_URI;
db.cards = require('./cardModel.js');
db.comments = require('./commentModel.js');
db.users = require('./userModel');

module.exports = db;