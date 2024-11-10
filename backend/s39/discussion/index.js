// use the "require" directive to load the express module/package
// a module is a software component/part of a program that contains one or more routines
// this is to get the contents of the express package to be used by our application
const express = require("express");

// create an application using express
// this creates an express application and stores it in a variable app
// In simpler terms, app is our server
// http://localhost
const app = express();

// For our application to run, we need a port tolisten to
const port = 4000;

// these are called middlewares 
// middlewares is a software that provides common services to the application outside of what's being offered by the operating system.

// setup for allowing the server to handle data from requests(client)
// allows our app to read json data and convert it into JS object
app.use(express.json());
// By default, information received from the url can only be received as a string or an array
// By applying the option of extended: true, this allows us to receive information in other data types such as an object which we will use throughout the application
app.use(express.urlencoded({ extended: true }));

// [SECTION] Routes
// express has methods corresponding to each HTTP method
// this route expects to receive a GET request from the URI "/"
// the first argument will be the URI endpoint
app.get('/', (req, res) => {

	// it uses send() method to send a response back to the client
	res.send('Hello World!');
})

// Mini-Activity
// This route expects to receive a GET request at the URI "/hello" displaying "Hello from the other side!"
app.get("/hello", (req, res) => {

	res.send("Hello from the other side!");
})

// this route expects to receive a POST request at the URI "/hello"
app.post("/hello", (req, res) => {

	// body is a property found in the request object
	// req.body contains the contents/data of the request body
	/*
		req.body = {
		    "firstName": "Hillary",
		    "lastName": "Almonte"
		}
	*/
	res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`);
});

// created an empty "users" array tha will store the contents of the request body
// this will serve as our mock database
let users = [];

// this route expects to receive a POST request at the URI "/register"
// this will mirror a real worls application of registration
app.post("/register", (req, res) => {

	// if the username or password is not empty
	if(req.body.username !== '' && req.body.password !== '') {

		// this will store the content of the req.body in the users array
		users.push(req.body);

		res.send(`User ${req.body.username} successfully registered`);

	} else {

		res.send('Please input BOTH username and password.')
	}

	console.log(users);
})

app.delete("/delete-user", (req, res) => {

	if(users.length > 0) {

		users.pop();
		res.send(users);

	} else {

		res.send("Users collection is empty.");
	}
})

// This route expects to receive a PUT request at the URI "/change-password"
app.put("/change-password", (req, res) => {
    let message = "User does not exist";
    const { username, newPassword } = req.body;

    // Iterate over the users array to find the user
    for (let user of users) {
        if (user.username === username) {
            user.password = newPassword; // Change the user's password
            message = `User ${username}'s password has been updated`;
            break; // Exit loop once found
        }
    }

    res.send(message); // Send the message back to the client
});



// tells our server to listen to the port given
if(require.main === module){
	app.listen(port, () => console.log(`Server is running at port ${port}`));
}

module.exports = { app };