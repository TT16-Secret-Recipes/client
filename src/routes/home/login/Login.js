import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Login.css";

export default function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginMessage, setLoginMessage] = useState("");

	function validateForm() {
		return username.length > 0 && password.length > 0;
	}

	const login = (e) => {
		const credentials = { username, password };
		e.preventDefault();
		axios
			.post(
				"https://tt16-secret-recipes.herokuapp.com/api/auth/login",
				credentials
			)
			.then((res) => {
				setLoginMessage(res.data.message);

				localStorage.setItem("token", res.data.payload);
				setTimeout(function () {
					props.history.push("/account");
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	// useEffect(() => {
	// 	const script = document.createElement("script");
	// 	script.src = "/assets/js/main.js";
	// 	script.defer = true;
	// 	document.body.appendChild(script);
	// 	return () => {
	// 		document.body.removeChild(script);
	// 	};
	// }, [login]);
	return (
		<>
			<Header />
			<div className="Login">
				<h2>{loginMessage}</h2>
				<Form onSubmit={login}>
					<Form.Group size="lg" controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control
							autoFocus
							type="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</Form.Group>
					<Form.Group size="lg" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button block size="lg" type="submit" disabled={!validateForm()}>
						Login
					</Button>
				</Form>
			</div>
			<Footer />
		</>
	);
}
