import React from 'react';
import './Display.css';


const Display = ({ data }) => {
	return (
		<div className="box">
			<p>AuthorName: {data.authorName}</p>
			<p>CompanyEmail: {data.company_Email}</p>
			<p>CompanyName: {data.company_Name}</p>
			<p>MarketSize: {data.marketSize}</p>
			<p>BusinessModel: {data.businessModel}</p>
			<p>Competitiveness: {data.competitiveness}</p>
			<p>FinancialStatus: {data.financialStatus}</p>
			<p>RiskFactors: {data.riskFactors}</p>
			<p>CostTierOne: {data.costTierOne}</p>
			<p>CostTierTwo: {data.costTierTwo}</p>
			<p>CostTierThree: {data.cost_TierThree}</p>
			<p>CostTierFour: {data.cost_TierFour}</p>
		</div>
	);
};

export default Display;