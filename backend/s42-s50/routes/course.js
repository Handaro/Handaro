// Activity: Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");
const { verify, verifyAdmin } = require("../auth");

// Activity: Routing Component
const router = express.Router();

// Activity: Route for creating a course
// we use the POST method if our request contains atleast 1 body property
router.post("/", verify, verifyAdmin, courseController.addCourse); 

// Activity: Route for retrieving all courses
router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

// Activity: Route for retrieving all active courses
router.get("/", courseController.getAllActive);

// Activity: Route for retrieving a specific course
// If the intention is to retrieve data. it should typically use the GET method
// In that case, we are going to send the course id through the parameter instead of the body
// the course id will be denoted by the ":id" also known as route parameters
// we can use the GET method if we do not have any body property in our request
router.get("/specific/:id", courseController.getCourse); 

// Activity: Route for updating a course (Admin)
router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

// Activity: Route to archiving a course (Admin)
router.patch("/:courseId/archive", verify, verifyAdmin, courseController.archiveCourse);

// Activity: Route to activating a course (Admin)
router.patch("/:courseId/activate", verify, verifyAdmin, courseController.activateCourse);


// CHATGPT ASSISTED CODE
// Route to search for courses by course name
// Update endpoint to remove /courses as we already group our routes under this in index.jss
router.post('/search', courseController.searchCoursesByName);

// CHATGPT activity

// Route to search for courses by price range
router.post("/search-price", courseController.searchCoursesByPriceRange);

// Activity: Export Route System
module.exports = router;