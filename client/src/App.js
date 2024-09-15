import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Users from "./components/Users.js";

function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</Router>
	);
}

export default App;
