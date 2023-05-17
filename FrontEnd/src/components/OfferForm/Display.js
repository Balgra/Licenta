import React from 'react';
import './Display.css';


const Display = ({ data }) => {
	return (
		<div className="box">
			<p>AuthorName: {data.AuthorName}</p>
			<p>CompanyEmail: {data.CompanyEmail}</p>
			<p>CompanyName: {data.CompanyName}</p>
			<p>MarketSize: {data.MarketSize}</p>
			<p>BusinessModel: {data.BusinessModel}</p>
			<p>Competitiveness: {data.Competitiveness}</p>
			<p>FinancialStatus: {data.FinancialStatus}</p>
			<p>RiskFactors: {data.RiskFactors}</p>
			<p>CostTierOne: {data.CostTierOne}</p>
			<p>CostTierTwo: {data.CostTierTwo}</p>
			<p>CostTierThree: {data.CostTierThree}</p>
			<p>CostTierFour: {data.CostTierFour}</p>
		</div>
	);
};

export default Display;