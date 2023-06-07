import React from 'react';
import Form from '../components/OfferForm/Form';
import Carusel from "../components/OfferForm/Carusel";

const CompanyPage = ({ onSubmit, submissions }) => {
	
	const handleSubmit = (data) => {
		onSubmit(data);
	};
	
	return (
		<div className="app__header" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<br />
			<Carusel />
			<br />
			<div className="form-container" style={{ display: "flex", justifyContent: "center" }}>
				<Form onSubmit={handleSubmit} />
			</div>
		</div>
	);
};

export default  CompanyPage;