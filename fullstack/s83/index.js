// index.js
// Basic ExpressJS Server
// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");

// [SECTION] Server setup
const app = express();

// [SECTION] Database Connection
// mongoose.connect(process.env.MONGODB_STRING);
mongoose.connect('mongodb+srv://admin:admin1234@parpandb.ggwx3.mongodb.net/movie-API?retryWrites=true&w=majority&appName=ParpanDB');
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

// [SECTION] Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes Middleware
const movieRoutes = require("./routes/movie"); 
const userRoutes = require("./routes/user");

app.use("/movies", movieRoutes); 
app.use("/users", userRoutes);

if(require.main === module){
	app.listen(process.env.PORT || 4000, () => {
	    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
	});
}

module.exports = {app,mongoose};