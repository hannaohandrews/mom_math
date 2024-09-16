const mongoose = require("mongoose");

const babySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		bedtime: {
			type: Number,
		},
	},
	{ collection: "baby" }
);

const Baby = mongoose.model("Baby", babySchema);

module.exports = Baby;
