import Learn from "../components/LearnPages/learn-page";
import {useNavigate} from "react-router-dom";

const LearnPage = ({loggedIn}) =>{
	
	const navigate = useNavigate();
	
	if (!loggedIn) {
		navigate('/login');
		return null; // Return null or any placeholder while redirecting
	}
	
	return (
	<><Learn/></>
	);
};

export default LearnPage;