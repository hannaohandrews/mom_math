const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("user list");
});
// need to be above dynamic id changes below
router.get("/new", (req, res) => {
	res.send("user new form");
});

router.post("/", (req, res) => {
	res.send("Make a new user");
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

const users = [{ name: "hanna" }, { name: "Kyle" }];
// middleware :
router.param("id", (req, res, next, id) => {
	req.user = users[id];
	next();
});

// router.get("/:id", (req, res) => {
// 	req.params.id;
// 	res.send(`Get user id ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
// 	req.params.id;
// 	res.send(`Update user id ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
// 	req.params.id;
// 	res.send(`Delete user id ${req.params.id}`);
// });

module.exports = router;
