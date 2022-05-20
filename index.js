// index.js - everything gets is start here

const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');

const app = express();
const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Allow-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

const db = require('./models');
db.mongoose.connect(db.uri)
  .then ( () => {
    console.log('DB connected');
  })
  .catch(error => {
    console.log('Cannot connect to the database', error);
    process.exit();
  });