// Router for handling users

const { Router } = require('express');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userinfo');

router.post('/', userController.createUser);

router.get('/:email', userController.getOneUserByEmail);

router.delete('/:email', userController.deleteUser);

module.exports = router;