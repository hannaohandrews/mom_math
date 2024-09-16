import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		// prevent default form submission behavior
		event.preventDefault();

		try {
			const response = await fetch("http://localhost:8000/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email }),
			});
			console.log("succesffully made a new user");
			navigate("/usersList");

			if (!response.ok) {
				throw new Error("bad network");
			}
		} catch (error) {
			console.error("Error submitting form");
		}
	};

	return (
		<div>
			<h2>Create a New User</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}></input>
				</div>
				<div>
					<label>Email:</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<button type="submit">Create a New User</button>
			</form>
		</div>
	);
};

export default UserForm;
