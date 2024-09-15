const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB Atlas"))
	.catch((err) => console.error("MongoDB connection error:", err));

//middleware
app.use(cors());
app.use(express.json());

// Routes
const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.get("/", (req, res) => {
	res.json({ message: "Hello from server!" });
});

// Test route to verify connection
app.get("/test-db", async (req, res) => {
	try {
		// Example query to test connection
		const usersCount = await mongoose.connection.db
			.collection("users")
			.countDocuments();
		res.json({
			message: `Connected to MongoDB Atlas. Users count: ${usersCount}`,
		});
	} catch (error) {
		res.status(500).json({ error: "Error accessing MongoDB", details: error });
	}
});

app.listen(PORT, () => {
	console.log(`You are listening to  ${{ PORT }}`);
});
