import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
	const [authorName, setauthorName] = useState('');
	const [company_Email, setcompany_Email] = useState('');
	const [company_Name, setcompany_Name] = useState('');
	const [marketSize, setmarketSize] = useState('');
	const [businessModel, setbusinessModel] = useState('');
	const [competitiveness, setcompetitiveness] = useState('');
	const [financialStatus, setfinancialStatus] = useState('');
	const [riskFactors, setriskFactors] = useState('');
	const [costTierOne, setcostTierOne] = useState('');
	const [costTierTwo, setcostTierTwo] = useState('');
	const [cost_TierThree, setcost_TierThree] = useState('');
	const [cost_TierFour, setcost_TierFour] = useState('');
	const [deadline, setdeadline] = useState('');
	
	/*const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ AuthorName, CompanyEmail, CompanyName, MarketSize, BusinessModel, Competitiveness,
			FinancialStatus, RiskFactors, CostTierOne, CostTierThree, CostTierTwo, CostTierFour});
	};*/
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const offerData = {
			authorName,
			company_Name,
			company_Email,
			deadline,
			costTierOne,
			costTierTwo,
			cost_TierThree,
			cost_TierFour,
			marketSize,
			businessModel,
			competitiveness,
			financialStatus,
			riskFactors,
			
			
		};
		
		try {
			const token = localStorage.getItem('token');
			const response = await fetch('https://localhost:7239/api/offers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify(offerData),
			});
			
			if (response.ok) {
				// Handle successful response
				const offer = await response.json();
				onSubmit(offer);
			} else {
				// Handle error response
				console.error('Error:', response.statusText);
			}
			setauthorName('');
			setcompany_Name('');
			setcompany_Email('');
			setdeadline('');
			setcostTierOne('');
			setcostTierTwo('');
			setcost_TierThree('');
			setcost_TierFour('');
			setmarketSize('');
			setbusinessModel('');
			setcompetitiveness('');
			setfinancialStatus('');
			setriskFactors('');
		} catch (error) {
			// Handle network error
			console.error('Error:', error.message);
		}
	};
		
	
	const formFields = [
		{ label: 'authorName', type: 'string', value: authorName, onChange: setauthorName },
		{ label: 'companyName', type: 'string', value: company_Name, onChange: setcompany_Name },
		{ label: 'companyEmail', type: 'string', value: company_Email, onChange: setcompany_Email },
		{ label: 'Deadline', type: 'date', value: deadline, onChange: setdeadline },
		{ label: 'CostTierOne', type: 'integer', value: costTierOne, onChange: setcostTierOne },
		{ label: 'CostTierTwo', type: 'integer', value: costTierTwo, onChange: setcostTierTwo },
		{ label: 'CostTierThree', type: 'integer', value: cost_TierThree, onChange: setcost_TierThree },
		{ label: 'CostTierFour', type: 'integer', value: cost_TierFour, onChange: setcost_TierFour },
		{ label: 'MarketSize', type: 'string', value: marketSize, onChange: setmarketSize },
		{ label: 'BusinessModel', type: 'string', value: businessModel, onChange: setbusinessModel },
		{ label: 'Competitiveness', type: 'string', value: competitiveness, onChange: setcompetitiveness },
		{ label: 'FinancialStatus', type: 'string', value: financialStatus, onChange: setfinancialStatus },
		{ label: 'RiskFactors', type: 'string', value: riskFactors, onChange: setriskFactors },
	];
	
	return (
		
		<form onSubmit={handleSubmit} className="form">
			{formFields.map((field) => (
				<label key={field.label} className="form-label">
					{field.label}:
					<input type={field.type} value={field.value} onChange={(e) => field.onChange(e.target.value)} className="form-input" />
				</label>
			))}
			<br />
			<button type="submit" className="form-button">
				Submit
			</button>
		</form>
	);
};

export default Form;