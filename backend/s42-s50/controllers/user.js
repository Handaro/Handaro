const User = require('../models/User');
const Enrollment = require("../models/Enrollment");
// use the "require" directive to load bcryptjs module/package that allows us to encrypt information
const bcrypt = require('bcryptjs');
const auth = require('../auth');
const { errorHandler } = require('../auth'); // ============================Different========================
module.exports.registerUser = (req, res) => {
		console.log(req.body);
	if (!req.body.email.includes("@")){

        // return res.status(400).send(false);
        // Change ===================Start=============================
        return res.status(400).send({ message: 'Invalid email format' });
        // Change ===================END===============================

    } else if (req.body.mobileNo.length !== 11){

        // return res.status(400).send(false);
        // Change ===================Start=============================
        return res.status(400).send({ message: 'Mobile number is invalid' });
        // Change ===================END===============================

    } else if (req.body.password.length < 8) {

        // return res.status(400).send(false);
        // Change ===================Start=============================
        return res.status(400).send({ message: 'Password must be atleast 8 characters long' });
        // Change ===================END===============================

    } else {
		// creates a variable named "newUser" and instantiates a new "User" document using the mongooose model
		// uses the information fron the request body to provide all necessary information
		let newUser = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			mobileNo: req.body.mobileNo,
			// password: reqBody.password
			// hashSync() method of the bcrypt module is responsible for hasing/encrypting our information
			// it accepts 2 arguments, the first argument is the information to be encrypted. the second arguments is the number of salt rounds.
			password: bcrypt.hashSync(req.body.password, 10)
		});

		// save the created document to our database using the save() method
		// save() method can have 2 results:
			// if the save is successful, the document created will be returned and stored in the "result" variable
			// if the save is unsuccessful, it will catch the error and store it in the variable "err" then return it to the client
		// return newUser.save().then((result) => res.status(201).send(result))
		// Change ===================Start=============================
		return newUser.save().then((user) => res.status(201).send({ success: true, message: 'User registered successfully', user }))
		// Change ===================END===============================
	    .catch(error => errorHandler(error, req, res));
	}
}

// controller function for user authentication
module.exports.loginUser = (req, res) => {

	// check f the email value given contains an @ symbol
	if(req.body.email.includes('@')) {
		// use the findOne() method to search for the first document in the "users" collection that matches the email given in the request body.
		// it will return the document and store it in the variable "result"
		return User.findOne({email: req.body.email}).then(result => {

			// if no document was found
			if(result == null) {

				// return res.status(404).send(false);
				// Change ===================Start=============================
				return res.status(404).send({ message: 'No email found' });
				// Change ===================END===============================

			// If a document was found
			} else {

				// compareSync() method will compare the given arguments and check if it matches. it compares the non encrypted password to the encrypted password
				// it will store the boolean result in the variable "isPasswordCorrect". if the passwords match return true, else return false
				const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);

				// if the password matches
				if(isPasswordCorrect) {

					// generate an access token
					// invoke the createAcessToken() in auth.js and send the user document as argument
					// return res.status(200).send({ access : auth.createAccessToken(result)});
					// Change ===================Start=============================
					return res.status(200).send({ message: 'User logged in successfully', access: auth.createAccessToken(result) });
					// Change ===================END===============================

				// if the password do not match
				} else {

					// return res.status(401).send(false);
					// Change ===================Start=============================
					return res.status(401).send({ message: 'Incorrect email or password' });
					// Change ===================END===============================
				}
			}
		})
		.catch(error => errorHandler(error, req, res));
	} else {

		return res.status(400).send(false);
	}
}

// Activity: Check if the email already exists
// Mini-Activity
/*
	Update the “checkEmailExists” to add status codes
		if there is a duplicate email, send true with http status back to the client
		if there is no duplicate email, send false with http status back to the client
*/
module.exports.checkEmailExists = (req, res) => {

	// .includes() is an array method that will be used to check if the given array contains the specified value
	// string is a collection of characters. string is an array of characters
	if(req.body.email.includes('@')) {

	    return User.find({ email : req.body.email })
	    .then(result => {

	        if (result.length > 0) {

	        	// 409 means Conflict. It means that there is a conflict with the request being made
	            return res.status(409).send({ message: 'Duplicate email found' });

	        } else {

	        	// 404 means Not Found
	            return res.status(404).send({ message: 'No duplicate email found' });
	        };
	    })
	    .catch(error => errorHandler(error, req, res));

    // if the email value does not contain "@" 
	} else {

		// 400 means bad request. The request is considered bad if it has the wrong syntax, malformed, or missing information.
		return res.status(400).send({ message: 'Invalid email format' });
	}
};

// Activity: Retrieve user details
// the getProfile method now has access to the "req", "res" oj=bjects 
module.exports.getProfile = (req, res) => {

    return User.findById(req.user.id).then(result => {
    	if(result) { // Change ===================Add One Line =============================
	        result.password = "";
	        // .status(status_code) is chained to send the HTTP status code together with the response back to the client
	        // 200 status code means OK/successful. This means that the request is fulfilled because the resource has been fetched and transmitted back to he client
	        return res.status(200).send(result);
	    // Change ===================Start =============================    
        } else {
            return res.status(404).send({ message: 'User not found' });
        }
        // Change ===================END================================
    })
    .catch(error => errorHandler(error, req, res));
};

// controller function to enroll user to a course
module.exports.enroll = (req, res) => {

	// if the user is an admin, we will not let them proceed
	if(req.user.isAdmin) {

		// admins should not be allowed to enroll to a course
		// return res.status(403).send(false);
		// Change ===================Start =============================  
		return res.status(403).send({ message: 'Admin is forbidden' });
		// Change ===================END================================
	}

	// create a enrollment document from the Enrollment schema and model
	let newEnrollment = new Enrollment({
		// the userId will be retrieved from the access token
		userId: req.user.id,
		enrolledCourses: req.body.enrolledCourses,
		totalPrice: req.body.totalPrice
	})

	// 201 means created. We are able to create a new enrollment document
	return newEnrollment.save()
	// .then(enrolled => res.status(201).send(true))
	// Change ===================Start =============================  
	.then(enrolled => res.status(201).send({ success: true, message: 'Enrolled successfully' }))
	// Change ===================END================================
	.catch(err => errorHandler(err, req, res));
}

module.exports.getEnrollments = (req, res) => {

    return Enrollment.find({userId : req.user.id}).then(enrollments => {

        if (enrollments.length > 0) {

            return res.status(200).send(enrollments);
        }

        // return res.status(404).send(false);
        // Change ===================Start =============================  
        return res.status(404).send({ message: 'No user found' });
        // Change ===================END================================
    })
    .catch(err => errorHandler(err, req, res));
};


// CHATGPT ASSISTED CODE
// Reset Password
module.exports.resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    // update userId to id because our version of req.user does not have userId property but id property instead
    const { id } = req.user; 

    // Hashing the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Updating the user's password in the database
    // Update userId to id
    await User.findByIdAndUpdate(id, { password: hashedPassword });

    // Sending a success response
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update profile
// Controller function to update the user profile
module.exports.updateProfile = async (req, res) => {
  try {
  	// Add a console.log() to check if you can pass data properly from postman
  	// console.log(req.body);

  	// Add a console.log() to show req.user, our decoded token, does have id property
  	// console.log(req.user);

    // Get the user ID from the authenticated token
    const userId = req.user.id;

    // Retrieve the updated profile information from the request body
    // Update req.body to use mobileNo isntead of mobileNumber to match our schema
    const { firstName, lastName, mobileNo } = req.body;

    // Update the user's profile in the database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, mobileNo },
      { new: true }
    );

    res.send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to update profile' });
  }
}

// chatgpt

const User = require("../models/user"); // Assuming you have a User model

// Function to update user as admin
module.exports.updateUserAsAdmin = async (req, res) => {
    const { userId, isAdmin } = req.body; // Extract userId and isAdmin from the request body

    if (!userId || typeof isAdmin !== 'boolean') {
        return res.status(400).send({ message: "Invalid input" });
    }

    try {
        // Update the user's isAdmin field
        const updatedUser = await User.findByIdAndUpdate(userId, { isAdmin }, { new: true });

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        return res.status(200).send({ message: "User updated successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
};
