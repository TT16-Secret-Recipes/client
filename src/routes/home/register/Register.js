
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import axios from "axios";
export default function Register(props) {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	function validateForm() {
		return email.length > 0 && username.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	const register = (e) => {
		const credentials = { email, username, password };
		e.preventDefault();
		axios
			.post(
				"https://tt16-secret-recipes.herokuapp.com/api/auth/register",
				credentials
			)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem("token", res.data.payload);
				props.history.push("/login");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="Email">
			<Form onSubmit={register}>
				<Form.Group size="lg" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						autoFocus
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
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
	);
}
=======
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import Footer from '../components/Footer';
import Header from '../components/Header'

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js'
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
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