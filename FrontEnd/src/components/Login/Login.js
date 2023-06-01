import React, { useState } from 'react';

import './Login.css';

const Login = () => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleLogin = async (e) => {
		e.preventDefault();
		
		try {
			const response = await fetch("https://localhost:7239/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ Email: email, password: password }),
			});
			
			if (response.ok) {
				const token = await response.text();
				localStorage.setItem('token', token);
				console.log(token);
				console.log(email, password);
			} else {
				console.error("Login failed:", response.statusText);
			}
		} catch (error) {
			console.error("Login failed:", error);
		}
		
		
	};
	
	return (
		<div>
			<form  onSubmit={handleLogin}>
				<div>
					<label>Email:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;