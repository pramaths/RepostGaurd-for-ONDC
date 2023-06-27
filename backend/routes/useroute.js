const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Create a new user
router.post('/upload', userController.create);

// Search for users
router.get('/users', userController.search);

// Get user details by ID
router.get('/users/:id', userController.details);

router.get('/users/platform/:platform', userController.getByPlatform);
module.exports = router;

