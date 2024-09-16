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

//Make a new User
router.post("/", async (req, res) => {
	try {
		// make a new user from request body
		const newUser = new User(req.body);
		// save the new user to database
		const savedUser = await newUser.save();
		console.log("do you get here?");
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
	.put(async (req, res) => {
		try {
			const updateUser = await User.findByIdAndUpdate(req.params.id);
			if (!updateUser) {
				return res.status(404).json({ message: "User not found" });
			}
			res.status(200).json({ message: "User successfully Updated! Woot!" });
		} catch {
			console.error("error updating user", error);
		}
	})
	.delete(async (req, res) => {
		try {
			const deletingUser = await User.findByIdAndDelete(req.params.id);
			if (!deletingUser) {
				return res.status(404).json({ message: "User not found" });
			}
			res.status(200).json({ message: "User successfully deleted! Woot!" });
		} catch {
			console.error("error deleting user", error);
		}
	});

module.exports = router;
