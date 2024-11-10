// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensure unique emails
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
