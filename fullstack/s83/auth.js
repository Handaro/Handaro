const jwt = require("jsonwebtoken");
require('dotenv').config(); // Load environment variables from .env file

// Secret should be stored in an environment variable for security
const secret = process.env.JWT_SECRET || "MovieManagement";  // Default to hardcoded value in case .env is not set

// Create a new access token for the user
module.exports.createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin
    };

    return jwt.sign(data, secret, { expiresIn: '1h' }); // Set token expiration time
};

// Middleware to verify the token
module.exports.verify = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ auth: "Failed", message: "No token provided" });
    }

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({
                auth: "Failed",
                message: err.message
            });
        }

        req.user = decodedToken; // Attach user info to the request object
        next(); // Proceed to the next middleware/route handler
    });
};

// Middleware to verify that the user is an admin
module.exports.verifyAdmin = (req, res, next) => {
    // Check if the user has the 'isAdmin' flag set to true
    if (!req.user || !req.user.isAdmin) {
        return res.status(403).json({ auth: "Failed", message: "Admin access required" });
    }
    next(); // Proceed if the user is an admin
};

// Global error handler (optional)
module.exports.errorHandler = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: {
            message: errorMessage,
            errorCode: err.code || 'SERVER_ERROR',
            details: err.details || null 
        }
    });
};
