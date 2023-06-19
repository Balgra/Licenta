import React from "react";
import Offer from "../components/OfferForm/Offers"
import {useNavigate} from "react-router-dom";

const OffersPage = ({loggedIn}) => {
	
	const navigate = useNavigate();
	
	if (!loggedIn) {
		navigate('/login');
		return null; // Return null or any placeholder while redirecting
	}
	
	return (
		
		<div className="app__header bg-light-subtle d-flex flex-column align-items-center">
			<br/>
			<h1 className="text-dark">Offers</h1>
			<Offer />
			<br/>
		</div>
	);
};

export default OffersPage;