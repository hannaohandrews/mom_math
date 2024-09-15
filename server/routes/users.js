const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
	res.send("user list");
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
	.get((req, res) => {
		console.log(req.user);
		res.send(`Get user id ${req.params.id}`);
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
