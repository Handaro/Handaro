// controllers/workout.js
const Workout = require('../models/Workout');

// Get
exports.getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ userId: req.user.id });
        res.status(200).json({workouts: workouts});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching workouts", error });
    }
};

// Create
exports.createWorkout = async (req, res) => {
    try {
        const newWorkout = new Workout({
            userId: req.user.id,
            name: req.body.name,
            duration: req.body.duration,
            status: req.body.status || 'pending' 
        });

        const savedWorkout = await newWorkout.save();
        res.status(201).json(savedWorkout);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error creating workout", error });
    }
};

// Update 
exports.updateWorkout = async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedWorkout) {
            return res.status(404).json({ message: "Workout not found" });
        }
        res.status(200).json({message: "Workout updated succesfully",updatedWorkout: updatedWorkout });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error updating workout", error });
    }
};

// Delete 
exports.deleteWorkout = async (req, res) => {
    try {
        const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
        if (!deletedWorkout) {
            return res.status(404).json({ message: "Workout not found" });
        }
        res.status(200).json({ message: "Workout deleted successfully" });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error deleting workout", error });
    }
};

// Complete 
exports.completeWorkoutStatus = async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(
            req.params.id,
            { status: 'completed' }, // Update status to 'completed'
            { new: true }
        );

        if (!updatedWorkout) {
            return res.status(404).json({ message: "Workout not found" });
        }
        res.status(200).json({message: "Workout status updated succesfully",updatedWorkout: updatedWorkout });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error updating workout status", error });
    }
};
