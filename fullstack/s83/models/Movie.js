const mongoose = require('mongoose');

// Define the movie schema with embedded comments
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true,
        min: 1888, // Year the first movie was created
        max: new Date().getFullYear() // Current year
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    comments: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true
        },
        comment: {
            type: String,
            required: true,
            trim: true // Remove whitespace from both ends
        }
    }] // Embed comments directly into the movie schema
});

// Export the Movie model
module.exports = mongoose.model('Movie', movieSchema);
