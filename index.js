// index.js - everything gets its start here

const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const cors = require('cors');
const app = express();
// auth0 config
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();
//

const port = process.env.PORT || 3000;

// auth
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};
//

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended:true }))
  .use(cors())
  // auth
  .use(auth(config))
  //
  .use('/', requiresAuth(), require('./routes'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

const db = require('./models');
db.mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then ( () => {
    console.log('DB connected');
  })
  .catch(error => {
    console.log('Cannot connect to the database', error);
    process.exit();
  });