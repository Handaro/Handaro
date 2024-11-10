// controllers/movie.js
const Movie = require('../models/Movie');

// Get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ movies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching movies", error });
    }
};

// Get a movie by ID
exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ movie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching movie", error });
    }
};

// Create a new movie (Admin only)
exports.createMovie = async (req, res) => {
    const { title, director, year, description, genre } = req.body;

    try {
        const newMovie = new Movie({
            title,
            director,
            year,
            description,
            genre,
        });

        const savedMovie = await newMovie.save();
        res.status(201).json({ message: "Movie created successfully", movie: savedMovie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating movie", error });
    }
};

// Update a movie by ID (Admin only)
exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ message: "Movie updated successfully", movie: updatedMovie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating movie", error });
    }
};

// Delete a movie by ID (Admin only)
exports.deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting movie", error });
    }
};

// Add a comment to a movie
exports.addMovieComment = async (req, res) => {
    const { comment } = req.body; // Updated to match the schema

    try {
        const movie = await Movie.findById(req.params.id);
        console.log(movie);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const newComment = {
            userId: req.user.id,
            comment, // Use the updated field name
        };

        movie.comments.push(newComment);
        await movie.save();

        res.status(201).json({ message: "Comment added successfully", UpdatedMovie: movie});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding comment", error });
    }
};


// Get comments for a movie
exports.getMovieComments = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ comments: movie.comments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching comments", error });
    }
};
