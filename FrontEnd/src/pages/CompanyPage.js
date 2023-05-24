import React from 'react';
import Form from '../components/OfferForm/Form';

const CompanyPage = ({ onSubmit, submissions }) => {
	
	const handleSubmit = (data) => {
		onSubmit(data);
	};
	
	return (
		<div className="app__header" >
			<br/>
			<br/>
			<div className="form-container">
				<Form onSubmit={handleSubmit} />
			</div>
		</div>
	);
};

export default  CompanyPage;