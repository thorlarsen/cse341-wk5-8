// index.js - everything gets its start here

const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended:true }))
  .use(cors())
  .use('/', require('./routes'));

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