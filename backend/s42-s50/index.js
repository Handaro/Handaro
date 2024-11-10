// Basic ExpressJS Server
// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
// use the "require" directive to load the cors module which allows our backend application to be available to our frontend application.
// CORS means Cross Origin Resource Sharing
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require('./passport.js');

const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');

// [SECTION] Server setup
const app = express();
// [SECTION] Environment Setup
// use the "require" directive to load the package dotenv conifguration in order to use the environment variables. This helps in hiding sensitive information/credentials in our application
// Note: best practice is to create a .env and install dot env package at the start of your development
require('dotenv').config();

// [SECTION] Database Connection
mongoose.connect(process.env.MONGODB_STRING);

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

// [SECTION] Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
	origin: ['http://localhost:8000'], // allows requests from this client URL only. This is an array because multiple URL can be added for connection.
	credentials: true, // allow credentials (e.g. cookies, authorization headers)
	optionsSuccessStatus: 200, // provides a status code for successful OPTIONS request
	// methods: ['GET', 'POST'], // allow only specified HTTP methods
	// allowedHeaders: ['Content-Type', 'Authorization'] // allow only specified headers
}

app.use(cors(corsOptions));

// [SECTION] Google Login

// create a session with the given data
// resave prevents the session from overwriting the secret while the session is active
// saveUninitialized prevents the application from storing data in the session while the data has not yet been initialized
app.use(session({
	secret: process.env.clientSecret,
	resave: false,
	saveUninitialized: false
}));

// initialize the passport package when the application runs
app.use(passport.initialize());

// creates a session using the passport package
app.use(passport.session());

// [SECTION] Backend Routes
// defines the "/users" endpoint will be incuded for all user routes in the users file. groups all routes inside the userRoutes under /users.
// http://localhost:4000/users
app.use('/users', userRoutes);
// Activity: Add course routes
app.use("/courses", courseRoutes);


// [SECTION] Server Response
if(require.main === module) {
	// process.env allows access to the .env file and finds the value equal to PORT
	app.listen(process.env.PORT, () => console.log(`API is now online on port ${process.env.PORT}`));
};

module.exports = {app, mongoose};