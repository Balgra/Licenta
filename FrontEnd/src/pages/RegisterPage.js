import React, { useState } from 'react';

const RegisterPage = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [generatedPassword, setGeneratedPassword] = useState('');
	
	const handleRegister = async (e) => {
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
		<div className="bg-white d-flex justify-content-center align-items-center vh-100">
			<div className="p-4 shadow rounded border border-dark">
				<h2 className="text-black">Register</h2>
				<form onSubmit={handleRegister}>
					<div className="form-group">
						<label className="text-black">
							First Name:
							<input
								type="text"
								className="form-control border border-dark"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								style={{ backgroundColor: 'white' }}
							/>
						</label>
					</div>
					<div className="form-group">
						<label className="text-black">
							Last Name:
							<input
								type="text"
								className="form-control border border-dark"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								style={{ backgroundColor: 'white' }}
							/>
						</label>
					</div>
					<div className="form-group">
						<label className="text-black">
							Email:
							<input
								type="email"
								className="form-control border border-dark"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								style={{ backgroundColor: 'white' }}
							/>
						</label>
					</div>
					<div className="form-group">
						<label className="text-black">
							Role:
							<select
								className="form-control border border-dark"
								value={role}
								onChange={(e) => setRole(e.target.value)}
								style={{ backgroundColor: 'white' }}
							>
								<option value="">Select Role</option>
								<option value="Investor">Investor</option>
								<option value="Entrepreneur">Entrepreneur</option>
							</select>
						</label>
					</div>
					<br />
					<div className="text-center">
						<button type="submit"  className="btn btn-primary">Register</button>
					</div>
				</form>
				{generatedPassword &&  (
					<button className="btn btn-primary mt-2" onClick={() => {navigator.clipboard.writeText(generatedPassword)}}>Copy Password to Clipboard</button>
				)}
			</div>
		</div>
	);
};

export default RegisterPage;