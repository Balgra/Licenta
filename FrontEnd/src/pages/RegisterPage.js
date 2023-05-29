import React, { useState } from 'react';

const RegisterPage = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [generatedPassword, setGeneratedPassword] = useState('');
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const userData = {
			firstName,
			lastName,
			email,
			role,
		};
		
		try {
			const response = await fetch('https://localhost:7239/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			});
			
			if (response.ok) {
				const password = await response.text();
				setGeneratedPassword(password);
				console.log('Generated Password:', password);
			} else {
				console.error('Error registering user:', response.statusText);
			}
		} catch (error) {
			console.error('Error registering user:', error);
		}
	};
	
	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						First Name:
						<input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Last Name:
						<input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Email:
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Role:
						<input
							type="text"
							value={role}
							onChange={(e) => setRole(e.target.value)}
						/>
					</label>
				</div>
				<button type="submit">Register</button>
			</form>
			{generatedPassword && (
				<p>Password generated: {generatedPassword}</p>
			)}
		</div>
	);
};

export default RegisterPage;