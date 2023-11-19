import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Error } from "./pages";
// import Dashboard from "./pages/Dashboard";
// import Error from "./pages/Error";
// import Login from "./pages/Login";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="login" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
