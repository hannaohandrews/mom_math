import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.js";

import UserList from "./components/UserList.js";
import UserForm from "./components/UserForm.js";

function App() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
				<br />
				<Link to="/usersList">User List</Link>
				<br />
				<Link to="/newUsers">New Users Form</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/usersList" element={<UserList />} />
				<Route path="/newUsers" element={<UserForm />} />
			</Routes>
		</Router>
	);
}

export default App;
