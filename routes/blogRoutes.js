const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

// blog routes

router.get('/', blogController.blog_index);

// POST Request

router.post('/', blogController.blog_create_post);

// Create Blog (It have to be at the top before any routes /:id)

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_detail);

//DEETE Request

router.delete('/:id', blogController.blog_delete);

module.exports = router;