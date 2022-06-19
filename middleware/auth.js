const express = require('express');
const app = express();
require('dotenv').config();
const { auth } = require('express-openid-connect');


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

authent = app.use(auth(config));

module.exports = authent;