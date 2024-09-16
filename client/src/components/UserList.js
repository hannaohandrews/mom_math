import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [randomUser, setRandomUser] = useState([]);
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	const handleClickIncrease = () => {
		setCount(count + 1);
	};

	const handleClickDecrease = () => {
		setCount(count - 1);
	};

	const handleDelete = (userID) => {
		console.log(userID.toString(), "handleDelete");
		axios
			.delete(`http://localhost:8000/users/${userID}`)
			//filter out user
			.then((response) => {
				console.log(response, "response");
				if (response.status === 200) {
					console.log("Successfully deleted");
					const updatedUsers = users.filter((user) => user._id !== userID);
					setUsers(updatedUsers);
				}
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetch("http://localhost:8000/users")
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((error) => console.log("error fetching users"));
	}, []);

	useEffect(() => {
		axios
			.get("https://randomuser.me/api/")
			.then((response) => {
				setRandomUser(response.data.results[0].name.first);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		setCalculation(count * 2);
	}, [count]);

	return (
		<div>
			<h2>Counter</h2>
			<button onClick={handleClickIncrease}>Increase</button>
			<button onClick={handleClickDecrease}>Decrease</button>
			<p>{count}</p>
			<h3>Calculation</h3>
			<p>{calculation}</p>

			<h1>USERS LIST</h1>
			<ul>
				{users.map((user, index) => (
					<li key={index}>
						Name: {user.name} / Email: {user.email}
						<button
							onClick={() => {
								handleDelete(user._id);
							}}>
							Delete User
						</button>
					</li>
				))}
			</ul>

			<p>Randon User: {randomUser}</p>
		</div>
	);
};

export default UserList;
