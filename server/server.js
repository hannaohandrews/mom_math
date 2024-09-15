const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

mongoose
	.connect(mongoURI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.error("Error connecting to MongoDB:", error));

//middleware
app.use(cors());
app.use(express.json());

// Routes
const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.get("/", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
	console.log(`You are listening to  ${{ PORT }}`);
});
