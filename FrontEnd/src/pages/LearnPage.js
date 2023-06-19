import Learn from "../components/LearnPages/learn-page";
import {useNavigate} from "react-router-dom";

const LearnPage = ({loggedIn}) =>{
	
	const navigate = useNavigate();
	
	if (!loggedIn) {
		navigate('/login');
		return null;
	}
	
	return (
	<Learn/>);
};

export default LearnPage;