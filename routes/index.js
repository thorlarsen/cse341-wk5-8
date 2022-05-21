// Default router file - routes get directed through here

const router = require('express').Router();

router.use('/', require('./home'));
router.use('/cards', require('./cards'));
router.use('/api-docs', require('./api-docs'));

module.exports = router;