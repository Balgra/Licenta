import React from 'react';
import Form from '../components/OfferForm/Form';
import Submissions from "../components/OfferForm/Submissions";

const CompanyPage = ({ onSubmit, submissions }) => {
	
	const handleSubmit = (data) => {
		onSubmit(data);
	};
	
	return (
		<div>
			<br/>
			<br/>
			<div className="form-container">
				<Form onSubmit={handleSubmit} />
				<Submissions submissions={submissions}/>
			</div>
		</div>
	);
};

export default  CompanyPage;