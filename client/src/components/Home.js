import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1> Welcome to Mom Math</h1>
			<Link to="/users">Go to Users</Link>
		</div>
	);
};

export default Home;
