//routes/user.js
//setup the dependencies
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { verify } = require("../auth");// add

router.post("/register",  userController.registerUser)
router.post("/login", userController.loginUser)
router.get("/details", verify, userController.getProfile) // add

module.exports = router;