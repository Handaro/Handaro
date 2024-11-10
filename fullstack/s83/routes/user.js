// routes/user.js
const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

// User registration route
router.post("/register", userController.registerUser);

// User login route
router.post("/login", userController.loginUser);

module.exports = router;
