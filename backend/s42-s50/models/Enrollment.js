// [SECTION] Dependencies and Modules
const mongoose = require("mongoose");

// [SECTION] Mongoose Schema
const enrollmentSchema = new mongoose.Schema({
	userId: {
		// type refers to the data type expectedfor the field "userId"
		type: String,
		// required means that the value is needed when creating the document
		// if the userId is not provided, an error message will be shown
		required: [true, 'UserID is Required']
	},
	enrolledCourses: [
		{
			courseId: {
				type: String,
				required: [true, 'CourseID is required']
			}
		}
	],
	totalPrice: {
		type: Number,
		required: [true, 'Price is required']
	},
	enrolledOn: {
		type: Date,
		// Date.now means that we are saving the date and time currently
		default: Date.now
	},
	status: {
		type: String,
		default: "Enrolled"
	}
});

// [SECTION] Mongoose Model
module.exports = mongoose.model('Enrollment', enrollmentSchema);