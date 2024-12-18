const express = require('express');
const router = express.Router();
const Post = require('../controllers/post');


router.get('/', Post.getAllPosts);

router.post('/', Post.createNewPosts);

router.get('/:id', Post.getPostById);

module.exports = router;
