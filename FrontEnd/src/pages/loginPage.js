
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();
	
	const responseGoogle = (response) => {
		console.log(response);
		navigate('/learning');
	};
	
	const onFailure = (error) => {
		console.log(error);
	};
	
	return (
		<div>
			<h1>Login Page</h1>
			<GoogleLogin
				clientId="593783055375-sljia156ltmhlfrb93gvrf184oi56at4.apps.googleusercontent.com"
				buttonText="Login with Google"
				onSuccess={responseGoogle}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
};

export default LoginPage;