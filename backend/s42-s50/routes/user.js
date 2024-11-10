// [SECTION] Dependencies and Modules
const express = require('express');
const userController = require('../controllers/user');
// const { getProfile } = require("../controllers/user");
const passport = require('passport');
// import the auth module and deconstruct to use the verify() method
/*
	const auth = require('auth');
	auth.verify()
*/
const { verify, isLoggedIn } = require("../auth");

// [SECTION] Routing Component
// Router() allows access to the http methods
const router = express.Router();

// [SECTION] Routes

// Route for user registration
// this route expects to receive a POST request at the URI "/register"
// http://localhost:4000/users/register
router.post("/register", userController.registerUser);

// Route for user authentication
// thies route expects to receive a POST request at the URI "/login"
router.post("/login", userController.loginUser);

// Activity: Routes for duplicate email
router.post("/check-email", userController.checkEmailExists);

// Activity: Route for retrieving user details
// since the "/details" route invokes the verify() method, we have access to the req.user which contains the decodedToken information (id, email, isAdmin)
router.get("/details", verify, userController.getProfile); // ============================Different========================

// Route to enroll user to a course
// this route expects to receive a POST request at the URI "/enroll"
// this route can be accessed by authenticated user
router.post('/enroll', verify, userController.enroll);

// Activity: Route to get the user's enrollments array
router.get('/get-enrollments', verify, userController.getEnrollments);

// Route for initiating the Google OAuth consent screen
// authenticate() method of passport is used to verify the email credentials in Google APIs
router.get('/google', passport.authenticate('google', {
	// scope cointans the data that can be retrieved
	scope: ['email', 'profile'],
	// it will allow the user to choose an account
	prompt: 'select_account'
}));

// Roue for callback UIRL for Google OAuth authentication
router.get('/google/callback',
	// if not successful
	passport.authenticate('google', {
		failureRedirect: '/users/failed'
	}),
	// if successful
	function(req, res) {
		res.redirect('/users/success');
	}
);

// Route for failed Google OAuth authentication
router.get('/failed', (req, res) => {
	console.log('User is not authenticated');
	res.send('Failed');
});

// Route for successful Google OAuth authentication
router.get('/success', isLoggedIn, (req, res) => {
	console.log('You are logged in');
	res.send(`Welcome ${req.user.displayName}`);
});

// Route for logging out of the application
router.get('/logout', (req, res) => {

	req.session.destroy((err) => {

		if(err) {
			console.log('Error while destroying session: ', err);

		} else {

			req.logout(() => {
				console.log('You are logged out');
				res.redirect('/')
			})
		}
	})
})

// CHATGPT ASSISTED CODE
// Updated the authMiddleware to our own auth module and use verify instead
// Updated resetPasswordController to userController
// Change the route to put as this is an edit of a document
router.put('/reset-password', verify, userController.resetPassword);

// Update user profile route
// Update authMiddleWare.authentication to our ouwn auth module and user verify instead
// Update profileControlelr to userController
router.put('/profile', verify, userController.updateProfile);

// [SECTION] Export Route System
// allows us to export the "router" object that will be accessed in index.js file

// chatgpt activity

// Route to update a user as admin
router.patch("/update-user", verify, verifyAdmin, courseController.updateUserAsAdmin);



module.exports = router;
