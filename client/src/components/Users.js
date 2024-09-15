import React, { useEffect, useState } from "react";

const Users = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		fetch("http://localhost:8000/users")
			.then((response) => response.json)
			.then((data) => setUsers(data))
			.catch((error) => console.log("error fetching users"));
	}, []);

	return (
		<div>
			<h1>USERS LIST</h1>
			<ul>
				{users.map((user, index) => {
					<div key={index}>
						<li>user.name</li>
						<li>user.email</li>
					</div>;
				})}
			</ul>
		</div>
	);
};

export default Users;
