const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		console.log(`Found all users! ${users.length} Users`);
		res.json(users);
	} catch {
		console.error("Couldn not find users!");
		res.status(500);
	}
});
// need to be above dynamic id changes below
router.get("/new", (req, res) => {
	res.send("user new form");
});

//Make a new User
router.post("/", async (req, res) => {
	try {
		// make a new user from request body
		const newUser = new User(req.body);
		// save the new user to database
		const savedUser = await newUser.save();
		res.status(201).json({
			message: "user created successfully",
			user: savedUser,
		});
	} catch (error) {
		res.status(400).json({ error: "Error creating user", details: error });
	}
});

router
	.route("/:id")
	.get(async (req, res) => {
		const user = await User.findById(req.params.id);
		res.json(user);
	})
	.put((req, res) => {
		req.params.id;
		res.send(`Update user id ${req.params.id}`);
	})
	.delete((req, res) => {
		req.params.id;
		res.send(`Delete user id ${req.params.id}`);
	});

module.exports = router;
