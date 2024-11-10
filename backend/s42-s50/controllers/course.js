// Activity: Dependencies and Modules
const Course = require("../models/Course");
// use the "require" directive to allow access to the errorHandler() function inside the auth.js file
const { errorHandler } = require('../auth');

// Activity: Create a course
module.exports.addCourse = (req, res) => {

    // try... catch... is used to catch errors that might ocuur before the save operation
    // try {
        let newCourse = new Course({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price
        });

        // it will find the first document in the courses collection that matches our search criteria
        // then it will return either null if no document was found or the document itself in the "existingCourse" variable
        Course.findOne({ name: req.body.name }).then(existingCourse => {

            // if there is a document found
            if(existingCourse) {

                // Notice that we didn't respond directly with a string, instead we added an object with a value of string. This is the proper response from API to client. Direct string will only cause an error when connecting it to your frontend.
                // 409 means conflict
                return res.status(409).send({ message: 'Course already exists'});

            // if there is no document found
            } else {

                return newCourse.save()
                .then(result => res.status(201).send({ 
                    success: true,
                    message: 'Course added successfully',
                    // this is a shorthand, if the property and the variable are the same values, we can write them as one and it will be understood as result: result
                    result
                }))
                // Promise.catch() method
                // Promise based return "Promises" which can be chained with a .catch method to handle any errors that can occur during execution
                // using .catch() is  cnsidered a best practice for handling error within JS promise blocks
                // Error handling is done using .catch() to capture any errors that can occur during the course save action
                // uses the errorHandler middleware
                .catch(err => errorHandler(err, req, res)) // .catch(err => err) - captures the error but does not take any action, its only capturing and saving it in the variable "err" then returning variable "err"
            }
        })
        .catch(err => errorHandler(err, req, res))
    // } catch(err) {

    //     // Error Logging
    //     // this will be displayed in the terminal/broswer console
    //     console.log('Result of console.error:');
    //     console.error(err);

    //     res.send("Error in variables");
    // }
}; 

// Activity: Retrieve all courses
module.exports.getAllCourses = (req, res) => {

    return Course.find({}).then(result => {
       
        if(result.length > 0) {

            return res.status(200).send({ result });

        } else {

            return res.status(404).send({ message: 'No courses found' });
        }
    })
    .catch(error => errorHandler(error, req, res));
};

// Activity: Retrieve all active courses
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive: true }).then(result => {

        // if the elements in the resulting arrays is greater than 0
        if(result.length > 0) {

            return res.status(200).send(result);

        // if the resulting array is empty
        } else {

            // return res.status(404).send(false);
            // Change ===================Start=============================
            return res.status(404).send({ message: 'No active courses found' });
            // Change ===================END===============================
        }
    })
    .catch(error => errorHandler(error, req, res));
};

// Activity: Retrieve a specific cours
module.exports.getCourse = (req, res) => {

    // req.params.id will be used to access the value of the courseID to be found by  the mongoose method
    Course.findById(req.params.id).then(course => { // debug 1
        if(course) {
            return res.status(200).send(course);
        } else {
            // return res.status(404).send(false);
            // Change ===================Start=============================
            return res.status(404).send({ message: 'Course not found' });
            // Change ===================END===============================
        }
    })
    .catch(error => errorHandler(error, req, res)); 
};

// Activity: Update a specific course
module.exports.updateCourse = (req, res)=>{

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            // res.status(200).send(true);
            // Change ===================Start=============================
            res.status(200).send({ success: true, message: 'Course updated successfully' });
            // Change ===================END===============================
        } else {
            // res.status(404).send(false);
            // Change ===================Start=============================
            res.status(404).send({ message: 'Course not found' });
            // Change ===================END===============================
        }
    })
    .catch(error => errorHandler(error, req, res));
};

// Activity: Archive a specific course
module.exports.archiveCourse = (req, res) => {

    let updateActiveField = {
        isActive: false
    }

    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then(course => {
        if (course) {
            if (!course.isActive) {
                // return res.status(200).send('Course already archived');
                // Change ===================Start=============================
                return res.status(200).send({ message: 'Course already archived', course });
                // Change ===================END===============================
            }
            
            // return res.status(200).send(true);
            // Change ===================Start=============================
            return res.status(200).send({ success: true, message: 'Course archived successfully' });
            // Change ===================END===============================
        } else {
            // res.status(404).send(false);
            // Change ===================Start=============================
            return res.status(404).send({ message: 'Course not found' });
            // Change ===================END===============================

        }
    })
    .catch(error => errorHandler(error, req, res));
};

// Activity: Activate a specific course
module.exports.activateCourse = (req, res) => {

    let updateActiveField = {
        isActive: true
    }
    
    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
    .then(course => {
        if (course) {
            if (course.isActive) {
                // return res.status(200).send('Course already activated');
                // Change ===================Start=============================
                return res.status(200).send({ message: 'Course already activated', course });
                // Change ===================END===============================
            }
            // res.status(200).send(true);
            // Change ===================Start=============================
            return res.status(200).send({ success: true, message: 'Course activated successfully' });
            // Change ===================END===============================
        } else {
            // res.status(404).send(false);
            // Change ===================Start=============================
            return res.status(404).send({ message: 'Course not found' });
            // Change ===================END===============================
        }
    })
    .catch(error => errorHandler(error, req, res));
};


// CHATGPT ASSISTED CODE
// Controller action to search for courses by course name
module.exports.searchCoursesByName = async (req, res) => {
  try {
    const { courseName } = req.body;

    // Use a regular expression to perform a case-insensitive search
    const courses = await Course.find({
      name: { $regex: courseName, $options: 'i' }
    });

    res.send(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

// CHATGPT Activity

const Course = require("../models/course"); // Assuming you have a Course model

// Function to search courses by price range
module.exports.searchCoursesByPriceRange = async (req, res) => {
    const { minPrice, maxPrice } = req.body;

    if (typeof minPrice !== 'number' || typeof maxPrice !== 'number') {
        return res.status(400).send({ message: "Invalid price range" });
    }

    try {
        const courses = await Course.find({
            price: { $gte: minPrice, $lte: maxPrice },
            isActive: true // Optional: Only return active courses
        });

        return res.status(200).json(courses);
    } catch (error) {
        return res.status(500).send({ message: "Internal server error", error: error.message });
    }
};
