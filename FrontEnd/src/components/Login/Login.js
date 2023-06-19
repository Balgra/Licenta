import React, { useState } from 'react';

import './Login.css';
import {useNavigate} from "react-router-dom";

const Login = ({ setLoggedIn}) => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	
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
				setLoggedIn(true);
				console.log(token);
				console.log(email, password);
			} else {
				console.error("Login failed:", response.statusText);
			}
		} catch (error) {
			console.error("Login failed:", error);
		}
		setTimeout(() => {
			navigate('/');
		}, 2000);
		
	};
	
	return (
		<div className="bg-white d-flex justify-content-center align-items-center vh-100">
			<div className="p-4 shadow rounded border border-dark">
				<div className="d-flex justify-content-center align-items-center">
					<h2 className="text-dark">Login</h2></div>
				<form onSubmit={handleLogin}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label text-black"   >
							Email:
						</label>
						<input
							type="email"
							className="form-control border border-dark"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={{ backgroundColor: 'white' }}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label text-black" >
							Password:
						</label>
						<input
							type="password"
							className="form-control border border-dark"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={{ backgroundColor: 'white' }}
						/>
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<button type="submit" className="btn btn-primary">Login</button>
					</div>
				</form>
				<br/>
				<div className="d-flex justify-content-center align-items-center">
					<button onClick={() => navigate('/register')} className="btn btn-primary" style={{ width: '200px', height: '50px' }}>Head to Registration</button>
				</div>
			</div>
		</div>
	);
};

export default Login;