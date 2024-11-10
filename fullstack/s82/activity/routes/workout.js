// routes/workout.js
const express = require('express');
const workoutController = require('../controllers/workout');
const auth = require("../auth");
const {verify} = auth;

const router = express.Router();


router.post("/addWorkout", verify, workoutController.createWorkout);

router.get("/getMyWorkouts", verify, workoutController.getAllWorkouts);

router.patch("/updateWorkout/:id", verify, workoutController.updateWorkout);

router.delete("/deleteWorkout/:id", verify, workoutController.deleteWorkout);

router.patch("/completeWorkoutStatus/:id", verify, workoutController.completeWorkoutStatus);

module.exports = router;
