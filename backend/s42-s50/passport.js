// use the "require" directive to load the passport module/package which is an authentication middleware for Node.js.
const passport = require("passport");
// use the "require" directive to load the stragtegies we can use in the passport-google-auth20 module. Strategies are algorithms that are used for specific purposes
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config();

// this configures the "passport" module to use the google oauth2.0 authentication strategy
// uses the GOoogle API COnsole project OAUth Client ID Credentials
// "callbackURL" is the defined route on how the request will handle after the Google authentication
passport.use(new GoogleStrategy({
	clientID: process.env.clientID,
	clientSecret: process.env.clientSecret,
	callbackURL: "http://localhost:4000/users/google/callback",
	passReqToCallback: true
},

// this is the callback function that gets executed when a user is successfully authenticated 
function (req, accessToken, refreshToken, profile, done) {

	// done() is a parameter used in the function that functions as a callback
	return done(null, profile);
}
));

// this function is used to serialize the user object into a session
passport.serializeUser(function(user, done) {

	done(null, user);
});

passport.deserializeUser(function(user, done) {

	done(null, user);
});