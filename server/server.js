const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.get("/", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
	console.log(`You are listening to  ${{ PORT }}`);
});
