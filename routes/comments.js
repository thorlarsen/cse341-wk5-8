// Router for handling comments

const { Router } = require('express');
const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comments');

router.post('/', commentController.createComment);

module.exports = router;