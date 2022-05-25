// Router for handling comments

const { Router } = require('express');
const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comments');

router.post('/', commentController.createComment);

router.get('/:cid', commentController.getAllCommentsByCardId);

router.put('/:id', commentController.updateCommentById);

router.delete('/:id', commentController.deleteComment);

module.exports = router;