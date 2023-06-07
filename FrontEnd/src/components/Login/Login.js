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
		<div className="bg-dark d-flex justify-content-center align-items-center vh-100">
			<div className="p-4 shadow rounded">
				<h2 className="text-white">Login</h2>
				<form onSubmit={handleLogin}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label text-white"   >
							Email:
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={{ backgroundColor: 'white' }}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label text-white" >
							Password:
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={{ backgroundColor: 'white' }}
						/>
					</div>
					<button type="submit" className="btn btn-primary">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;