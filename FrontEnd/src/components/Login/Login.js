import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};
	
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Username: ${username}\nPassword: ${password}`);
		// TODO: Add login logic
	};
	
	const navigate = useNavigate();
	
	const responseGoogle = (response) => {
		console.log(response);
		navigate('/learning');
	};
	
	const onFailure = (error) => {
		console.log(error);
	};
	
	return (
		<div className="login-page">
			<div className="mypaper">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={handleUsernameChange}
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={handlePasswordChange}
						required
					/>
					<button type="submit">Login</button>
				</form>
				<GoogleLogin
					clientId="593783055375-sljia156ltmhlfrb93gvrf184oi56at4.apps.googleusercontent.com"
					buttonText="Login with Google"
					onSuccess={responseGoogle}
					onFailure={onFailure}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		</div>
	);
};

export default Login;