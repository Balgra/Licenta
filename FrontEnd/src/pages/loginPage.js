import Login from "../components/Login/Login.js";

const LoginPage = ({setLoggedIn}) => {
	
	
	return (
		<div>
			<Login setLoggedIn={setLoggedIn}/>
		</div>
	);
};

export default LoginPage;