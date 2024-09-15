import React, { useEffect, useState } from "react";

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/users")
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((error) => console.log("error fetching users"));
	}, []);

	return (
		<div>
			<h1>USERS LIST</h1>
			<ul>
				{users.map((user, index) => (
					<li key={index}>
						Name: {user.name} / Email: {user.email}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
