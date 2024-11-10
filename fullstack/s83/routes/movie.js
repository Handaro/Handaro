// routes/movie.js
const express = require('express');
const movieController = require('../controllers/movie'); 
const { verify, verifyAdmin } = require("../auth");
const router = express.Router();

// Admin-only routes 
router.post("/addMovie", verify, verifyAdmin, movieController.createMovie);
router.patch("/updateMovie/:id", verify, verifyAdmin, movieController.updateMovie);
router.delete("/deleteMovie/:id", verify, verifyAdmin, movieController.deleteMovie);

// Public routes 
router.get("/getMovies", movieController.getAllMovies); 
router.get("/getMovie/:id", movieController.getMovieById); 
router.patch("/addComment/:id", verify, movieController.addMovieComment); 
router.get("/getComments/:id", movieController.getMovieComments); 
module.exports = router;

