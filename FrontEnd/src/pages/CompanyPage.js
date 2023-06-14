import React from 'react';
import Form from '../components/OfferForm/Form';
import Carusel from "../components/OfferForm/Carusel";
import {useNavigate} from "react-router-dom";


const CompanyPage = ({ onSubmit, submissions, loggedIn }) => {
	
	const navigate = useNavigate();
	
	const handleSubmit = (data) => {
		onSubmit(data);
	};
	
	if (!loggedIn) {
		navigate('/login');
		return null; // Return null or any placeholder while redirecting
	}
	
	return (
		 <div className="app__header" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<br />
				<Carusel />
				<br />
				<div className="form-container" style={{ display: "flex", justifyContent: "center" }}>
					<Form onSubmit={handleSubmit} />
				</div>
			</div>);
};

export default  CompanyPage;