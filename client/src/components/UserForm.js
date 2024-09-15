import react, { useEffect, useState } from "react";

const UserForm = ({ onUserCreated }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		const newUser = {
			name,
			email,
		};

		fetch("http://localhost:8000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((response) => {
				response.json();
			})
			.then((data) => {
				onUserCreated(data.user);
				setName("");
				setEmail("");
			})
			.catch((error) => console.error("Error creating user"));
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
