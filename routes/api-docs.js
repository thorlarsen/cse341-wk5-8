// API documentation served by swagger-ui-express

const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const apiDocument = require('../api-doc-output.json');

router.use('/'. swaggerUi.serve);
router.get('/', swaggerUi.setup(apiDocument));

module.exports = router;