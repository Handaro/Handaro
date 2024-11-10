const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRoutes = require("./routes/game");
const userRoutes = require("./routes/user"); 

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:admin1234@parpandb.ggwx3.mongodb.net/gameApp?retryWrites=true&w=majority&appName=ParpanDB");
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/games", gameRoutes);
app.use("/users", userRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});


app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${process.env.PORT || 4000}`);
});

module.exports = { app, mongoose };
