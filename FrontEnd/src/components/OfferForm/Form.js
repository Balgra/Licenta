import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
	const [AuthorName, setAuthorName] = useState('');
	const [CompanyEmail, setCompanyEmail] = useState('');
	const [CompanyName, setCompanyName] = useState('');
	const [MarketSize, setMarketSize] = useState('');
	const [BusinessModel, setBusinessModel] = useState('');
	const [Competitiveness, setCompetitiveness] = useState('');
	const [FinancialStatus, setFinancialStatus] = useState('');
	const [RiskFactors, setRiskFactors] = useState('');
	const [CostTierOne, setCostTierOne] = useState('');
	const [CostTierTwo, setCostTierTwo] = useState('');
	const [CostTierThree, setCostTierThree] = useState('');
	const [CostTierFour, setCostTierFour] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ AuthorName, CompanyEmail, CompanyName, MarketSize, BusinessModel, Competitiveness,
			FinancialStatus, RiskFactors, CostTierOne, CostTierThree, CostTierTwo, CostTierFour});
	};
	
	const formFields = [
		{ label: 'AuthorName', type: 'text', value: AuthorName, onChange: setAuthorName },
		{ label: 'CompanyEmail', type: 'email', value: CompanyEmail, onChange: setCompanyEmail },
		{ label: 'CompanyName', type: 'text', value: CompanyName, onChange: setCompanyName },
		{ label: 'MarketSize ', type: 'text', value: MarketSize, onChange: setMarketSize },
		{ label: 'BusinessModel', type: 'text', value: BusinessModel, onChange: setBusinessModel },
		{ label: 'Competitiveness', type: 'text', value: Competitiveness, onChange: setCompetitiveness },
		{ label: 'FinancialStatus', type: 'text', value: FinancialStatus, onChange: setFinancialStatus },
		{ label: 'RiskFactors', type: 'text', value: RiskFactors, onChange: setRiskFactors },
		{ label: 'CostTierOne', type: 'text', value: CostTierOne, onChange: setCostTierOne },
		{ label: 'CostTierTwo', type: 'text', value: CostTierTwo, onChange: setCostTierTwo },
		{ label: 'CostTierThree', type: 'text', value: CostTierThree, onChange: setCostTierThree },
		{ label: 'CostTierFour', type: 'text', value: CostTierFour, onChange: setCostTierFour },
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
			<button type="submit" className="form-button">Submit</button>
		</form>
	);
};

export default Form;