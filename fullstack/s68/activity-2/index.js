//Activity
const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors");
const productRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://admin:admin1234@parpandb.ggwx3.mongodb.net/recipe-API?retryWrites=true&w=majority&appName=ParpanDB");
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(express.json());

app.use(cors());

app.use("/recipes", productRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };
